import Elysia, { t } from "elysia";
import { Verify3DUsecase } from "../../../application/transactions/usecases/verify-3d.usecase";
import { db } from "../../../domain/common/db";
export const threeDSecureRoutes = new Elysia({ prefix: "/3d-secure" })
  
  // 1. GET: Show the Mock 3D Secure page
  .get("/:transaction_id", async ({ params, set }) => {
    const { transaction_id } = params;

    const tx = await db.transaction.findUnique({
      where: { id: transaction_id },
      include: {
        three_d_logs: {
          orderBy: { createdAt: "desc" },
          take: 1
        },
        merchant: true
      }
    });

    if (!tx || tx.status !== "PENDING_3D") {
      set.status = 404;
      return "Transaction not found or already processed.";
    }

    const verificationCode = tx.three_d_logs[0]?.verification_code || "ERROR";

    // Basic HTML Form for Mock 3D
    set.headers["Content-Type"] = "text/html";
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>HSRCBANK - 3D Secure Doğrulama</title>
        <style>
          body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f4f9; }
          .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 400px; text-align: center; }
          .header { border-bottom: 2px solid #eee; padding-bottom: 1rem; margin-bottom: 1rem; }
          input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
          button { width: 100%; padding: 10px; background-color: #0056b3; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }
          button:hover { background-color: #004494; }
          .hint { color: #d9534f; font-weight: bold; margin-top: 15px; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>HSRCBANK 3D Secure</h2>
            <p>Satıcı: <strong>${tx.merchant.name}</strong></p>
            <p>Tutar: <strong>${(tx.amount / 100).toFixed(2)} ${tx.currency}</strong></p>
          </div>
          <p>Lütfen telefonunuza gönderilen şifreyi giriniz.</p>
          <form method="POST" action="/v1/3d-secure/${transaction_id}/verify">
            <input type="text" name="code" placeholder="SMS Şifresi" required autocomplete="off" />
            <button type="submit">Doğrula ve Öde</button>
          </form>
          <p class="hint">Test Ortamı Şifresi: ${verificationCode}</p>
        </div>
      </body>
      </html>
    `;
  })
  
  // 2. POST: Verify the code submitted by the mock user
  .post("/:transaction_id/verify", async ({ params, body, set }) => {
    const { transaction_id } = params;
    const { code } = body;

    try {
      const result = await Verify3DUsecase.execute(transaction_id, code);

      // We need to send the user back to the Merchant's return_url.
      // Easiest way in 3D is returning an HTML page with an auto-submitting form.
      set.headers["Content-Type"] = "text/html";
      
      const payloadBase64 = Buffer.from(JSON.stringify({
        transaction_id: result.tx.id,
        order_id: result.tx.order_id,
        status: result.tx.status,
        success: result.success
      })).toString("base64");

      return `
        <!DOCTYPE html>
        <html>
        <head><title>Yönlendiriliyor...</title></head>
        <body onload="document.forms[0].submit()">
          <p>Lütfen bekleyin, işyeri sayfasına yönlendiriliyorsunuz...</p>
          <form method="POST" action="${result.tx.return_url}">
            <input type="hidden" name="payment_result" value="${payloadBase64}" />
          </form>
        </body>
        </html>
      `;

    } catch (error: any) {
      set.status = 400;
      return `3D Doğrulama Hatası: ${error.message}`;
    }
  }, {
    body: t.Object({
      code: t.String()
    })
  });
