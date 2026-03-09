import { t } from "elysia";
import type { FlowType } from "@prisma/client";

export const InitializePaymentSchema = {
  body: t.Object({
    order_id: t.String({ minLength: 1 }),
    amount: t.Integer({ minimum: 1 }),
    currency: t.Optional(t.String({ default: "TRY" })),
    card: t.Object({
      name: t.String(),
      pan: t.String({ minLength: 13, maxLength: 19 }),
      month: t.String({ minLength: 2, maxLength: 2 }),
      year: t.String({ minLength: 2, maxLength: 4 }),
      cvv: t.String({ minLength: 3, maxLength: 4 }),
    }),
    flow_type: t.Optional(t.Union([t.Literal("AUTOMATIC"), t.Literal("MANUAL")])),
    is_auto_capture: t.Optional(t.Boolean()),
    return_url_ok: t.String({ format: "uri" }),
    return_url_fail: t.String({ format: "uri" }),
  }),
};

export type TInitializePaymentInput = {
  merchant_id: string;
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
  return_url_ok: string;
  return_url_fail: string;
};
