import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    createdAt: z.string(),
    telephone: z.string().max(11)
})


export const contactSchemaRequest = contactSchema
    .omit({
        createdAt:true,
    })