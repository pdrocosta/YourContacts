import { z } from "zod";
import { clientSchema } from "./client.schema";

export const contactSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    createdAt: z.string(),
    telephone: z.string().max(11),
    client: clientSchema
})


export const contactSchemaRequest = contactSchema
    .omit({
        createdAt:true,
    })