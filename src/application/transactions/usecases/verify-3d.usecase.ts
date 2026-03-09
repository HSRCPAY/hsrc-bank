import { db } from "../../../domain/common/db";

export class Verify3DUsecase {
  static async execute(transactionId: string, providedCode: string) {
    // 1. Fetch transaction and its single active 3D log
    const tx = await db.transaction.findUnique({
      where: { id: transactionId },
      include: {
        three_d_logs: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    if (!tx || tx.status !== "PENDING_3D") {
      throw new Error("Transaction is not valid for 3D Verification.");
    }

    const log = tx.three_d_logs[0];
    if (!log || log.status !== "PENDING") {
      throw new Error("No active 3D session found.");
    }

    // 2. Check the code
    if (log.verification_code !== providedCode) {
      // Failed attempt
      await db.threeDSecureLog.update({
        where: { id: log.id },
        data: { status: "FAILED" },
      });

      await db.transaction.update({
        where: { id: tx.id },
        data: { status: "FAILED" },
      });

      await db.transactionEventLog.create({
        data: {
          transaction_id: tx.id,
          event_type: "3D_FAILED",
        },
      });

      return {
        success: false,
        message: "Invalid Verification Code",
        tx,
      };
    }

    // 3. Mark 3D as SUCCESS
    await db.threeDSecureLog.update({
      where: { id: log.id },
      data: { status: "SUCCESS" },
    });

    await db.transactionEventLog.create({
      data: {
        transaction_id: tx.id,
        event_type: "3D_SUCCESS",
      },
    });

    // 4. Implement Core Payment Flow Rule: 3D Pay vs 3D Model
    let nextStatus = tx.status; // Currently PENDING_3D

    if (tx.flow_type === "THREE_D_PAY") {
      // In 3D_PAY, we automatically capture or auth immediately after 3D success.
      if (tx.is_auto_capture) {
        nextStatus = "CAPTURED";
        await db.transactionEventLog.create({
          data: { transaction_id: tx.id, event_type: "PAYMENT_CAPTURED", payload: { method: "AUTO" } },
        });
      } else {
        nextStatus = "AUTHORIZED";
        await db.transactionEventLog.create({
          data: { transaction_id: tx.id, event_type: "PAYMENT_AUTHORIZED", payload: { method: "AUTO" } },
        });
      }
    } else if (tx.flow_type === "THREE_D_MODEL") {
      // In 3D_MODEL, we just mark 3D as successful but DO NOT capture or auth.
      // We wait for the merchant to call the Server-to-Server Auth/Capture endpoint.
      // For HSRCBANK we can keep it as 'PENDING_3D' or create a new internal state like '3D_VERIFIED'.
      // Since our enum is strict, let's keep it PENDING_3D or assume AUTHORIZED but amount blocked is 0.
      // Better yet, let's just leave it as PENDING_3D, and the merchant will call capture with this tx_id.
      // Actually, let's just leave it untouched but the log says 3D_SUCCESS. 
      // Or we can add a status "3D_VERIFIED". Let's use AUTHORIZED without fund move for now, 
      // but conceptually it's safer to wait for the next call.
    }

    // Final Tx Update
    const updatedTx = await db.transaction.update({
      where: { id: tx.id },
      data: { status: nextStatus },
    });

    return {
      success: true,
      message: "3D Verification Successful",
      tx: updatedTx,
    };
  }
}
