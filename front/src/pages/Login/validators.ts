import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email("Not an email"),
    password: z.string().nonempty("Password is required")
})

export type TLogin = z.infer<typeof loginSchema>