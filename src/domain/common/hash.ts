import { createHmac } from "node:crypto";

/**
 * Generates an HMAC-SHA256 hash from a set of fields + merchant secret key.
 * Used to sign 3D callback payloads so HSRCPAY can verify the origin.
 */
export function generateHash(fields: Record<string, string>, secretKey: string): string {
  // Sort keys to ensure deterministic ordering
  const sortedKeys = Object.keys(fields).sort();
  const payload = sortedKeys.map((key) => `${key}=${fields[key]}`).join("&");
  const hmac = createHmac("sha256", secretKey);
  hmac.update(payload);
  return hmac.digest("hex");
}

/**
 * Verifies an HMAC-SHA256 hash.
 */
export function verifyHash(fields: Record<string, string>, secretKey: string, providedHash: string): boolean {
  const expected = generateHash(fields, secretKey);
  return expected === providedHash;
}
