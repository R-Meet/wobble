import z from "zod";

export const SignupSchema = z.object({
  username: z
    .string()
    .min(3, "Minimum 3 characters")
    .max(30, "Maximum 30 characters")
    .lowercase("Must be lowercase")
    .regex(/^[a-z0-9_]+$/, "Only lowercase letters, numbers, and underscores")
    .trim(),
  
  password: z
    .string()
    .min(6, 'Minimum 6 characters')
    .max(50, 'Maximum 50 characters'),

  confirmPassword: z
    .string()
})
.refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

