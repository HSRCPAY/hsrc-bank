// Pure domain entity types — no Prisma dependency

export type TMerchant = {
  id: string;
  name: string;
  api_key: string;
  secret_key: string;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  createdAt: Date;
  updatedAt: Date;
};
