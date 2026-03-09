// Pure domain entity types — no Prisma dependency

export type TTransactionStatus = "PENDING_3D" | "AUTHORIZED" | "CAPTURED" | "FAILED" | "REFUNDED" | "VOIDED";
export type TSecureMode = "SECURE" | "NONSECURE";
export type TFlowType = "AUTOMATIC" | "MANUAL";

export type TTransaction = {
  id: string;
  merchant_id: string;
  order_id: string;
  amount: number;
  currency: string;
  card_bin: string;
  card_last4: string;
  status: TTransactionStatus;
  secure_mode: TSecureMode;
  flow_type: TFlowType;
  is_auto_capture: boolean;
  return_url_ok: string;
  return_url_fail: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TThreeDSecureLog = {
  id: string;
  transaction_id: string;
  verification_code: string;
  status: "PENDING" | "SUCCESS" | "FAILED";
  payload?: any;
  createdAt: Date;
  updatedAt: Date;
};

export type TTransactionWithRelations = TTransaction & {
  merchant?: { id: string; name: string; secret_key: string };
  three_d_logs?: TThreeDSecureLog[];
};
