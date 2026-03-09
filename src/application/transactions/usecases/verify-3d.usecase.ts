import { db } from "../../../domain/common/db";
import { generateHash } from "../../../domain/common/hash";
import type { TransactionStatus } from "@prisma/client";

export class Verify3DUsecase {
  static async execute(transactionId: string, providedCode: string) {
    // 1. Fetch transaction with 3D log and merchant (for secret_key)
    const tx = await db.transaction.findUnique({
      where: { id: transactionId },
      include: {
        three_d_logs: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
        merchant: true,
      },
    });

    if (!tx || tx.status !== "PENDING_3D") {
      throw new Error("Transaction is not valid for 3D Verification.");
    }

    const log = tx.three_d_logs[0];
    if (!log || log.status !== "PENDING") {
      throw new Error("No active 3D session found.");
    }

    // 2. Check verification code
    if (log.verification_code !== providedCode) {
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

      // Generate HMAC for fail callback
      const hashFields = {
        transaction_id: tx.id,
        order_id: tx.order_id,
        status: "FAILED",
      };
      const hash = generateHash(hashFields, tx.merchant.secret_key);

      return {
        success: false,
        return_url: tx.return_url_fail,
        hash,
        tx: { ...tx, status: "FAILED" as TransactionStatus },
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

    // 4. Apply flow logic
    let nextStatus: TransactionStatus = "PENDING_3D";

    if (tx.flow_type === "AUTOMATIC") {
      // AUTOMATIC = 3D Pay: immediately auth or capture
      if (tx.is_auto_capture) {
        nextStatus = "CAPTURED";
        await db.transactionEventLog.create({
          data: { transaction_id: tx.id, event_type: "PAYMENT_CAPTURED", payload: { trigger: "3D_AUTO" } },
        });
      } else {
        nextStatus = "AUTHORIZED";
        await db.transactionEventLog.create({
          data: { transaction_id: tx.id, event_type: "PAYMENT_AUTHORIZED", payload: { trigger: "3D_AUTO" } },
        });
      }
    } else if (tx.flow_type === "MANUAL") {
      // MANUAL = 3D Model: only 3D verified, merchant calls auth/capture later
      nextStatus = "AUTHORIZED";
      await db.transactionEventLog.create({
        data: { transaction_id: tx.id, event_type: "3D_VERIFIED_MANUAL", payload: { awaiting_merchant_action: true } },
      });
    }

    const updatedTx = await db.transaction.update({
      where: { id: tx.id },
      data: { status: nextStatus },
    });

    // 5. Generate HMAC for success callback
    const hashFields = {
      order_id: tx.order_id,
      status: nextStatus,
      transaction_id: tx.id,
    };
    const hash = generateHash(hashFields, tx.merchant.secret_key);

    return {
      success: true,
      return_url: tx.return_url_ok,
      hash,
      tx: updatedTx,
    };
  }
}
