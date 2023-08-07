import { z } from "zod";


export const userSchema = z.object({
    id: z.number(),
    email: z.string().email().max(45),
    password: z.string().max(22)
})