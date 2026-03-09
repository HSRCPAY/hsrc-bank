import Elysia from "elysia";
import { ApiKeyValidationRule } from "../../domain/merchants/rules";

/**
 * API Key Authentication Middleware.
 * Used ONLY on REST API routes (Actor 1: Merchant Server-to-Server).
 * 3D Secure page routes (Actor 2) do NOT use this middleware.
 */
export const authMiddleware = new Elysia({ name: "auth" })
  .derive(async ({ request, set }) => {
    const authHeader = request.headers.get("authorization");
    let apiKey: string | null = request.headers.get("x-api-key");

    if (authHeader?.startsWith("Bearer ")) {
      apiKey = authHeader.split(" ")[1] || null;
    }

    if (!apiKey) {
      set.status = 401;
      throw new Error("Unauthorized: Missing API Key");
    }

    const merchant = await ApiKeyValidationRule.validate(apiKey);

    if (!merchant) {
      set.status = 401;
      throw new Error("Unauthorized: Invalid API Key or Inactive Merchant");
    }

    return {
      merchant,
    };
  });
