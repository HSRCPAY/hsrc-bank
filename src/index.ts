import { Elysia } from "elysia";
import { paymentRoutes } from "./http/v1/payments/route";
import { threeDSecureRoutes } from "./http/v1/3d-secure/route";

const app = new Elysia()
  .onError(({ error, set }) => {
    console.error("[HSRCBANK Error]", error.message);
    set.status = set.status && set.status >= 400 ? set.status : 500;
    return {
      success: false,
      error: error.message || "Internal Server Error",
    };
  })
  .get("/health", () => ({ status: "ok", service: "hsrcbank" }))
  .group("/v1", (app) =>
    app
      .use(paymentRoutes)   // Actor 1: REST API (protected by authMiddleware)
      .use(threeDSecureRoutes) // Actor 2: 3D Secure pages (public, no auth)
  )
  .listen(3000);

console.log(`🏦 HSRCBANK running at http://localhost:${app.server?.port}`);
