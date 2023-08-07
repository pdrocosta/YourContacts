import { z } from "zod"
import { clientSchema, clientSchemaRequest, clientsSchema } from "../schemas/client.schema"
import { contactSchema, contactSchemaRequest } from "../schemas/contact.schema"
import { userSchema } from "../schemas/user.schema"

type TClient = z.infer<typeof clientSchema>
type TClientRequest = z.infer<typeof clientSchemaRequest>
type TClients = z.infer<typeof clientsSchema>
type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactSchemaRequest>

type TUser = z.infer<typeof userSchema>



export { TClient, TClientRequest, TClients, TContact, TContactRequest, TUser }