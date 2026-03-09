import { db } from "../../common/db";
import type { Merchant } from "@prisma/client";

export class ApiKeyValidationRule {
  static async validate(apiKey: string): Promise<Merchant | null> {
    if (!apiKey) {
      return null;
    }

    const merchant = await db.merchant.findUnique({
      where: {
        api_key: apiKey,
      },
    });

    if (!merchant || merchant.status !== "ACTIVE") {
      return null;
    }

    return merchant;
  }
}
