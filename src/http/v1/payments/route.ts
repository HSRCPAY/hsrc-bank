import Elysia from "elysia";
import { InitializePaymentSchema } from "../../../application/transactions/usecases/initialize-payment.schema";
import { InitializePaymentUseCase } from "../../../application/transactions/usecases/initialize-payment.usecase";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const paymentRoutes = new Elysia({ prefix: "/payments" })
  // Apply our custom API Key authentication middleware
  .use(authMiddleware)
  
  // Endpoint to initialize a new payment
  .post(
    "/initialize",
    async ({ body, merchant }) => {
      try {
        const result = await InitializePaymentUseCase.execute({
          ...body,
          merchant_id: merchant.id, // Injected by authMiddleware
        });

        return result;
      } catch (error: any) {
        // Simple error handling
        return {
          success: false,
          error: error.message || "An error occurred during payment initialization",
        };
      }
    },
    InitializePaymentSchema
  );
