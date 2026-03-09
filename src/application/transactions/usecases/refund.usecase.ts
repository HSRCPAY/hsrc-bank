import { db } from "../../../domain/common/db";

export class RefundUseCase {
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

    if (tx.status !== "CAPTURED") {
      throw new Error("INVALID_STATE: Only captured transactions can be refunded.");
    }

    const updatedTx = await db.transaction.update({
      where: { id: tx.id },
      data: { status: "REFUNDED" },
    });

    await db.transactionEventLog.create({
      data: {
        transaction_id: tx.id,
        event_type: "PAYMENT_REFUNDED",
        payload: { refunded_amount: tx.amount },
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
