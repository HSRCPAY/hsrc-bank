import Elysia from "elysia";
import { ApiKeyValidationRule } from "../../domain/merchants/rules";

export const authMiddleware = new Elysia()
  .derive(async ({ request, set }) => {
    // Basic auth extraction, checking for Authorization: Bearer <API_KEY>
    // or maybe X-Api-Key headers depending on standard
    const authHeader = request.headers.get("authorization");
    let apiKey = request.headers.get("x-api-key");
    
    if (authHeader?.startsWith("Bearer ")) {
      apiKey = authHeader.split(" ")[1];
    }

    if (!apiKey) {
      set.status = 401;
      throw new Error("Unauthorized: Missing API Key"); // Or return early depending on Elysia structure
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
