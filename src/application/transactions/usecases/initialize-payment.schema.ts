import { t } from "elysia";
import type { FlowType } from "@prisma/client";

// Input validation schema for creating a payment
export const InitializePaymentSchema = {
  body: t.Object({
    order_id: t.String({ minLength: 1, description: "Unique order reference from HSRCPAY" }),
    amount: t.Integer({ minimum: 1, description: "Amount in smallest currency unit (e.g. cents)" }),
    currency: t.Optional(t.String({ default: "TRY" })),
    card: t.Object({
      name: t.String(),
      pan: t.String({ minLength: 15, maxLength: 19 }),
      month: t.String({ minLength: 2, maxLength: 2 }),
      year: t.String({ minLength: 2, maxLength: 4 }),
      cvv: t.String({ minLength: 3, maxLength: 4 }),
    }),
    flow_type: t.Optional(t.Union([t.Literal("THREE_D_PAY"), t.Literal("THREE_D_MODEL")])),
    is_auto_capture: t.Optional(t.Boolean()),
    return_url: t.String({ format: "uri" }),
  }),
};

export type TInitializePaymentInput = {
  merchant_id: string; // Extracted from auth middleware
  order_id: string;
  amount: number;
  currency?: string;
  card: {
    name: string;
    pan: string;
    month: string;
    year: string;
    cvv: string;
  };
  flow_type?: FlowType; 
  is_auto_capture?: boolean;
  return_url: string;
};
