import { db } from "../../../domain/common/db";

export class CancelUseCase {
  static async execute(transactionId: string, merchantId: string) {
    const tx = await db.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!tx) {
      throw new Error("TRANSACTION_NOT_FOUND");
    }

    if (tx.merchant_id !== merchantId) {
      throw new Error("UNAUTHORIZED: Transaction does not belong to this merchant.");
    }

    // Can only void AUTHORIZED or CAPTURED transactions
    if (tx.status !== "AUTHORIZED" && tx.status !== "CAPTURED") {
      throw new Error("INVALID_STATE: Only authorized or captured transactions can be voided.");
    }

    const updatedTx = await db.transaction.update({
      where: { id: tx.id },
      data: { status: "VOIDED" },
    });

    await db.transactionEventLog.create({
      data: {
        transaction_id: tx.id,
        event_type: "PAYMENT_VOIDED",
        payload: { previous_status: tx.status },
      },
    });

    return {
      success: true,
      transaction_id: updatedTx.id,
      order_id: updatedTx.order_id,
      status: updatedTx.status,
    };
  }
}
