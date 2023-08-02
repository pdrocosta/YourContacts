import { z } from "zod"
import { clientSchema, clientSchemaRequest } from "../schemas/client.schema"
import { contactSchema, contactSchemaRequest } from "../schemas/contact.schema"
import { userSchema } from "../schemas/user.schema"

type TClient = z.infer<typeof clientSchema>
type TClientRequest = z.infer<typeof clientSchemaRequest>

type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactSchemaRequest>

type TUser = z.infer<typeof userSchema>


export { TClient, TClientRequest, TContact, TContactRequest, TUser }