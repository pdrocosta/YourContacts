import { z } from "zod"
import clientSchema from "./schemas/client.schema"

type TClient = z.infer<typeof clientSchema>


export { TClient }