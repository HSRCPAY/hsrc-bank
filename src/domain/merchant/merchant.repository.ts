import type { TMerchant } from "./merchant.entity";

export interface IMerchantRepository {
  findByApiKey(apiKey: string): Promise<TMerchant | null>;
  findById(id: string): Promise<TMerchant | null>;
}
