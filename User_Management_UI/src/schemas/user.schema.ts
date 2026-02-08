import { z } from "zod";

const required = "This field is required";

const requiredString = z
  .any()
  .transform((val) => (val ?? "").toString())
  .pipe(z.string().trim().min(1, required));

export const userSchema = z.object({
  firstName: requiredString,

  lastName: requiredString,

  phone: requiredString
    .refine((val) => /^\d+$/.test(val), {
      message: "Phone must contain only numbers",
    })
    .refine((val) => val.length === 10, {
      message: "Enter a valid 10 digit phone number",
    }),

  email: z
    .any()
    .transform((val) => (val ?? "").toString())
    .pipe(
      z.string().trim().min(1, required).email("Enter a valid email address"),
    ),
});

export type UserFormData = z.infer<typeof userSchema>;
