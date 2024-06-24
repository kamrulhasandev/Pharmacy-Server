import { z } from "zod";

const categoryValidation = z.object({
  body: z.object({
    name: z.string().min(3),
    icon: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(["active", "inactive"]).default("active"),
  }),
});

export default categoryValidation;
