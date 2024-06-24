import { z } from "zod";

const userValidation = z.object({
  body: z.object({
    email: z.string(),
    status: z.enum(["active", "inactive"]).default("active"),
    role: z.enum(["admin", "user"]).default("user"),
  }),
});

export default userValidation;
