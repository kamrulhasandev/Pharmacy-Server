import { z } from "zod";

const saleValidation = z.object({
  body: z.object({
    product: z.string({ required_error: "Product id is required" }),
    user: z.string({ required_error: "User id is required" }),
    quantity: z.number({ required_error: "Quantity is required" }),
    price: z.number({ required_error: "Price is required" }),
  }),
});

export default saleValidation;