import Elysia, { t } from "elysia";
import { InitializePaymentSchema } from "../../../application/transactions/usecases/initialize-payment.schema";
import { InitializePaymentUseCase } from "../../../application/transactions/usecases/initialize-payment.usecase";
import { RefundUseCase } from "../../../application/transactions/usecases/refund.usecase";
import { CancelUseCase } from "../../../application/transactions/usecases/cancel.usecase";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const paymentRoutes = new Elysia({ prefix: "/payments" })
  .use(authMiddleware)

  // Initialize a new payment
  .post(
    "/initialize",
    async ({ body, merchant, set }) => {
      try {
        const result = await InitializePaymentUseCase.execute({
          ...body,
          merchant_id: merchant.id,
        });
        return result;
      } catch (error: any) {
        set.status = 400;
        return { success: false, error: error.message };
      }
    },
    InitializePaymentSchema
  )

  // Refund a captured transaction
  .post(
    "/:transaction_id/refund",
    async ({ params, merchant, set }) => {
      try {
        const result = await RefundUseCase.execute(params.transaction_id, merchant.id);
        return result;
      } catch (error: any) {
        set.status = 400;
        return { success: false, error: error.message };
      }
    },
    {
      params: t.Object({
        transaction_id: t.String(),
      }),
    }
  )

  // Cancel (void) a transaction
  .post(
    "/:transaction_id/cancel",
    async ({ params, merchant, set }) => {
      try {
        const result = await CancelUseCase.execute(params.transaction_id, merchant.id);
        return result;
      } catch (error: any) {
        set.status = 400;
        return { success: false, error: error.message };
      }
    },
    {
      params: t.Object({
        transaction_id: t.String(),
      }),
    }
  );
