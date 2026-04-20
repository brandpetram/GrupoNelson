import { z } from 'zod'

export const submitSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .regex(/^[^\r\n]*$/, 'no newlines'),
  email: z.string().trim().email().max(200),
  phone_number: z
    .string()
    .trim()
    .min(7)
    .max(30)
    .or(z.literal(''))
    .optional(),
  company: z.string().trim().max(150).optional(),
  role: z.string().trim().max(50).optional(),
  country: z.string().trim().max(100).optional(),
  park: z.string().trim().max(50).optional(),
  interest: z.string().trim().max(500).optional(),
  message: z.string().trim().max(2000).optional(),
  website: z.string().max(500).optional(),
  turnstileToken: z.string().min(10).max(2048).optional(),
})

export type SubmitPayload = z.infer<typeof submitSchema>
