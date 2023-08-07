import { z } from "zod";

export const clientSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    createdAt: z.date(),
    telephone: z.string().max(11)
})


export const clientSchemaRequest = clientSchema
    .omit({
        createdAt:true,
    })

export const clientsSchema = z.array(clientSchema)