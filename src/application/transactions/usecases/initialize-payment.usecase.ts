import { db } from "../../../domain/common/db";
import { CardValidationRule } from "../../../domain/transactions/rules";
import type { TInitializePaymentInput } from "./initialize-payment.schema";

export class InitializePaymentUseCase {
  static async execute(input: TInitializePaymentInput) {
    // 1. Validate card
    const validCard = CardValidationRule.validateCard(input.card.pan);
    if (!validCard) {
      throw new Error("INVALID_CARD: Card number is not recognized.");
    }

    // 2. Validate BIN
    const binInfo = CardValidationRule.getBinInfo(input.card.pan);
    if (!binInfo) {
      throw new Error("INVALID_BIN: BIN information not found.");
    }

    // 3. Duplicate order check
    const existing = await db.transaction.findUnique({
      where: { order_id: input.order_id },
    });
    if (existing) {
      throw new Error("DUPLICATE_ORDER: Order ID already exists.");
    }

    // 4. Flow defaults
    const flowType = input.flow_type ?? "AUTOMATIC";
    let isAutoCapture = input.is_auto_capture ?? true;

    // MANUAL flow = 3D Model → no immediate auth/capture → override auto_capture
    if (flowType === "MANUAL") {
      isAutoCapture = false;
    }

    // 5. Create transaction
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
        return_url_ok: input.return_url_ok,
        return_url_fail: input.return_url_fail,
      },
    });

    // 6. Generate 3D verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    await db.threeDSecureLog.create({
      data: {
        transaction_id: transaction.id,
        verification_code: verificationCode,
        status: "PENDING",
      },
    });

    // 7. Event log
    await db.transactionEventLog.create({
      data: {
        transaction_id: transaction.id,
        event_type: "PAYMENT_INITIALIZED",
        payload: {
          flow: flowType,
          auto_capture: isAutoCapture,
          merchant_id: input.merchant_id,
        },
      },
    });

    // 8. Return redirect URL
    const host = process.env.APP_HOST || "http://localhost:3000";
    const redirectUrl = `${host}/v1/3d-secure/${transaction.id}`;

    return {
      success: true,
      transaction_id: transaction.id,
      order_id: transaction.order_id,
      status: transaction.status,
      redirect_url: redirectUrl,
    };
  }
}
