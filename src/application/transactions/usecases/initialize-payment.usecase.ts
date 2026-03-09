import { db } from "../../../domain/common/db";
import { CardValidationRule } from "../../../domain/transactions/rules";
import type { TInitializePaymentInput } from "./initialize-payment.schema";
import { randomUUID } from "node:crypto";

export class InitializePaymentUseCase {
  static async execute(input: TInitializePaymentInput) {
    // 1. Validate the card against sandbox rules
    const validCard = CardValidationRule.validateSandboxCard(input.card.pan);
    
    if (!validCard) {
      throw new Error("Sandbox Error: Use only permitted test cards.");
    }

    // 2. Validate BIN info for metadata
    const binInfo = CardValidationRule.getBinInfo(input.card.pan);

    if (!binInfo) {
      throw new Error("Sandbox Error: BIN information not found for card.");
    }

    // 3. Prevent duplicate order_id from the same merchant (optional but good practice)
    const existingTransaction = await db.transaction.findUnique({
      where: { order_id: input.order_id },
    });

    if (existingTransaction) {
      throw new Error("Duplicate Order ID.");
    }

    // 4. Default behaviors
    const flowType = input.flow_type ?? "THREE_D_PAY";
    
    // Default to strict adherence of rules: 
    // Three D Model handles only verification, no auto_capture allowed by logic,
    // so if model is THREE_D_MODEL, auto_capture is essentially false.
    let isAutoCapture = input.is_auto_capture ?? true;
    
    if (flowType === "THREE_D_MODEL") {
      isAutoCapture = false; // Forced false on Model flow
    }

    // 5. Create Transaction in Database
    const transaction = await db.transaction.create({
      data: {
        merchant_id: input.merchant_id,
        order_id: input.order_id,
        amount: input.amount,
        currency: input.currency ?? "TRY",
        card_bin: binInfo.prefix,
        card_last4: input.card.pan.slice(-4),
        status: "PENDING_3D",
        flow_type: flowType,
        is_auto_capture: isAutoCapture,
        return_url: input.return_url,
      },
    });

    // 6. Generate Mock 3D Secure Code & Log 
    // (In a real system, we'd call the Issuer's ACS. Here we mock it)
    const mock3dCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit code
    
    await db.threeDSecureLog.create({
      data: {
        transaction_id: transaction.id,
        verification_code: mock3dCode,
        status: "PENDING"
      }
    });

    // 7. Event logging (CQRS base)
    await db.transactionEventLog.create({
      data: {
        transaction_id: transaction.id,
        event_type: "PAYMENT_INITIALIZED",
        payload: {
          flow: flowType,
          capture: isAutoCapture,
          merchant: input.merchant_id,
        }
      }
    });

    // 8. Return response containing redirect URL for the frontend 3D simulation
    // In production, you would map this URL based on your Elysia server host
    const redirectUrl = `http://localhost:3000/v1/3d-secure/${transaction.id}`; 
    
    return {
      success: true,
      transaction_id: transaction.id,
      order_id: transaction.order_id,
      status: transaction.status,
      redirect_url: redirectUrl,
      _sandbox_hint: `Use 3D Code: ${mock3dCode}`
    };
  }
}
