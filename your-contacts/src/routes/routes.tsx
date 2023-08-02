import { Router } from "express";
import { CreateClientController,DeleteClientController, GetClientController, UpdateClientController } from "../controllers/clients.controller";
import {  CreateContactController, DeleteContactsController, GetContactsController, UpdateContactsController } from "../controllers/contacts.controller";

const clientRoutes = Router()

clientRoutes.post("", CreateClientController)
clientRoutes.get("", GetClientController)
clientRoutes.patch("/:id", UpdateClientController)
clientRoutes.delete("/:id", DeleteClientController)

const contactRoutes = Router()

contactRoutes.post("", CreateContactController)
contactRoutes.get("/:id", GetContactsController)
contactRoutes.delete("/:id", DeleteContactsController)
contactRoutes.patch("/:id", UpdateContactsController)

const loginRoute = Router()

loginRoute.post("", LoginController)

export { clientRoutes, contactRoutes, loginRoute}