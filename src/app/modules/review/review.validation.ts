import { z } from "zod";

const reviewValidation = z.object({
  body: z.object({
    product: z.string({ required_error: "Product id is required" }),
    user: z.string({ required_error: "User id is required" }),
    review: z.number().min(1).max(5),
    comment: z.string({ required_error: "Comment is required" }),
    status: z.enum(["active", "inactive"]).default("active"),
  }),
});

export default reviewValidation;
