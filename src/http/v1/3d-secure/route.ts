import Elysia, { t } from "elysia";
import { Verify3DUsecase } from "../../../application/transactions/usecases/verify-3d.usecase";
import { db } from "../../../domain/common/db";

/**
 * 3D Secure Routes — PUBLIC (Actor 2: End-user browser).
 * These routes do NOT use authMiddleware.
 */
export const threeDSecureRoutes = new Elysia({ prefix: "/3d-secure" })

  // GET: Render the 3D Secure verification page
  .get("/:transaction_id", async ({ params, set }) => {
    const { transaction_id } = params;

    const tx = await db.transaction.findUnique({
      where: { id: transaction_id },
      include: {
        three_d_logs: { orderBy: { createdAt: "desc" }, take: 1 },
        merchant: true,
      },
    });

    if (!tx || tx.status !== "PENDING_3D") {
      set.status = 404;
      set.headers["Content-Type"] = "text/html";
      return renderErrorPage("İşlem bulunamadı veya zaten işlenmiş.");
    }

    const verificationCode = tx.three_d_logs[0]?.verification_code || "------";
    const maskedPan = "**** **** **** " + tx.card_last4;
    const formattedAmount = (tx.amount / 100).toFixed(2);

    set.headers["Content-Type"] = "text/html";
    return render3DPage({
      merchantName: tx.merchant.name,
      maskedPan,
      formattedAmount,
      currency: tx.currency,
      transactionId: transaction_id,
      verificationCode,
    });
  })

  // POST: Verify the code → redirect to merchant (Actor 2, no auth)
  .post("/:transaction_id/verify", async ({ params, body, set }) => {
    const { transaction_id } = params;
    const { code } = body;

    try {
      const result = await Verify3DUsecase.execute(transaction_id, code);

      set.headers["Content-Type"] = "text/html";

      return renderCallbackPage({
        returnUrl: result.return_url,
        transactionId: result.tx.id,
        orderId: result.tx.order_id,
        status: result.tx.status,
        hash: result.hash,
      });
    } catch (error: any) {
      set.status = 400;
      set.headers["Content-Type"] = "text/html";
      return renderErrorPage(error.message);
    }
  }, {
    body: t.Object({
      code: t.String(),
    }),
  });


// ─── HTML Renderers ─────────────────────────────────────────────────────────

interface Render3DPageInput {
  merchantName: string;
  maskedPan: string;
  formattedAmount: string;
  currency: string;
  transactionId: string;
  verificationCode: string;
}

function render3DPage(p: Render3DPageInput): string {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HSRCBANK - 3D Secure</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'sans-serif'] },
          colors: {
            hsrc: {
              50: '#f0f4ff', 100: '#dbe4ff', 200: '#bac8ff',
              500: '#4c6ef5', 600: '#3b5bdb', 700: '#364fc7',
              800: '#1e3a5f', 900: '#0f172a',
            },
          },
        },
      },
    };
  </script>
  <style>
    .glass { backdrop-filter: blur(20px); background: rgba(255,255,255,0.85); }
    @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .float-anim { animation: float 6s ease-in-out infinite; }
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    .shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); background-size: 200% 100%; animation: shimmer 2s infinite; }
    .code-input:focus { box-shadow: 0 0 0 3px rgba(76, 110, 245, 0.3); }
  </style>
</head>
<body class="min-h-screen bg-gradient-to-br from-hsrc-900 via-hsrc-800 to-slate-900 flex items-center justify-center p-4">
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="absolute -top-40 -right-40 w-80 h-80 bg-hsrc-500/10 rounded-full blur-3xl float-anim"></div>
    <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl float-anim" style="animation-delay: 3s;"></div>
  </div>
  <div class="relative w-full max-w-md">
    <div class="glass rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
      <div class="bg-gradient-to-r from-hsrc-700 to-hsrc-600 px-6 py-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <div>
              <h1 class="text-white font-bold text-lg tracking-tight">HSRCBANK</h1>
              <p class="text-white/60 text-xs font-medium">3D Secure Doğrulama</p>
            </div>
          </div>
          <div class="shimmer w-8 h-8 rounded-full"></div>
        </div>
      </div>
      <div class="px-6 py-6 space-y-5">
        <div class="bg-slate-50 rounded-xl p-4 space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-slate-500 text-sm">İşyeri</span>
            <span class="text-slate-800 font-semibold text-sm">${p.merchantName}</span>
          </div>
          <div class="h-px bg-slate-200"></div>
          <div class="flex justify-between items-center">
            <span class="text-slate-500 text-sm">Kart</span>
            <span class="text-slate-800 font-mono text-sm">${p.maskedPan}</span>
          </div>
          <div class="h-px bg-slate-200"></div>
          <div class="flex justify-between items-center">
            <span class="text-slate-500 text-sm">Tutar</span>
            <span class="text-hsrc-600 font-bold text-lg">${p.formattedAmount} ${p.currency}</span>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
          <svg class="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-blue-700 text-xs leading-relaxed">Cep telefonunuza gönderilen doğrulama kodunu girin.</p>
        </div>
        <form method="POST" action="/v1/3d-secure/${p.transactionId}/verify" class="space-y-4">
          <div>
            <label class="block text-sm text-slate-600 font-medium mb-2">Doğrulama Kodu</label>
            <input type="text" name="code" required autocomplete="off" maxlength="6" placeholder="• • • • • •"
              class="code-input w-full px-4 py-3.5 text-center text-xl tracking-[0.5em] font-mono border-2 border-slate-200 rounded-xl focus:border-hsrc-500 focus:outline-none transition-all duration-200" />
          </div>
          <button type="submit" class="w-full py-3.5 bg-gradient-to-r from-hsrc-600 to-hsrc-500 text-white font-semibold rounded-xl hover:from-hsrc-700 hover:to-hsrc-600 transition-all duration-300 shadow-lg shadow-hsrc-500/25 hover:shadow-hsrc-500/40 active:scale-[0.98]">
            Doğrula
          </button>
        </form>
        <div class="text-center">
          <p class="text-xs text-slate-400">Doğrulama Kodu: <span class="font-mono font-bold text-amber-600">${p.verificationCode}</span></p>
        </div>
      </div>
      <div class="border-t border-slate-100 px-6 py-3 bg-slate-50/50">
        <div class="flex items-center justify-center gap-2">
          <svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-xs text-slate-500">256-bit SSL ile korunmaktadır</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

interface RenderCallbackInput {
  returnUrl: string;
  transactionId: string;
  orderId: string;
  status: string;
  hash: string;
}

function renderCallbackPage(p: RenderCallbackInput): string {
  return `<!DOCTYPE html>
<html>
<head><title>Yönlendiriliyor...</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center" onload="document.getElementById('callbackForm').submit()">
  <div class="text-center space-y-4">
    <div class="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
    <p class="text-white/80 text-sm font-medium" style="font-family: Inter, sans-serif;">İşyeri sayfasına yönlendiriliyorsunuz...</p>
  </div>
  <form id="callbackForm" method="POST" action="${p.returnUrl}" style="display:none;">
    <input type="hidden" name="transaction_id" value="${p.transactionId}" />
    <input type="hidden" name="order_id" value="${p.orderId}" />
    <input type="hidden" name="status" value="${p.status}" />
    <input type="hidden" name="hash" value="${p.hash}" />
  </form>
</body>
</html>`;
}

function renderErrorPage(message: string): string {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Hata - HSRCBANK</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-slate-900 flex items-center justify-center p-4" style="font-family: Inter, sans-serif;">
  <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full text-center border border-white/10">
    <div class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </div>
    <h2 class="text-white text-xl font-bold mb-2">İşlem Başarısız</h2>
    <p class="text-white/60 text-sm">${message}</p>
  </div>
</body>
</html>`;
}
