import { Router } from "express";
import { CreateClientController } from "../controllers/clients.controller";

const clientRoutes = Router()

clientRoutes.post("", CreateClientController)
clientRoutes.get("", GetClientController)
clientRoutes.get("/:id", RetrieveClientController)
clientRoutes.patch("/:id", UpdateClientController)
clientRoutes.delete("/:id", DeleteClientController)

const contactRoutes = Router()

contactRoutes.post("", CreateContactController)
contactRoutes.get("/:id", GetContactsController)
contactRoutes.delete("/:id", DeleteContactsController)
contactRoutes.patch("/:id", UpdateContactsController)

export { clientRoutes, contactRoutes }