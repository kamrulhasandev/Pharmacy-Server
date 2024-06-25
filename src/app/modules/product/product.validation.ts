import { z } from "zod";

const productValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),

    description: z.string({ required_error: "Description is required" }),
    price: z
      .number({ required_error: "Price is required" })
      .positive("Price must be a positive number"),
    category: z.string({ required_error: "Category is required" }),
    brand: z.string({ required_error: "Brand is required" }),
    dosageForm: z.string({ required_error: "Dosage form is required" }),
    strength: z.string({ required_error: "Strength is required" }),

    stock: z
      .number({ required_error: "Stock is required" })
      .int()
      .nonnegative("Stock must be a non-negative integer"),
    image: z.string().optional(),
    expirationDate: z.string({ required_error: "Expiration date is required" }),
    sideEffects: z.array(z.string()).optional(),
    usageInstructions: z.string().optional(),
    status: z.enum(["active", "inactive"]).default("active"),
  }),
});

export default productValidation;

