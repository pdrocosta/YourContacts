import { Router } from "express";
import { CreateClientController,DeleteClientController, GetClientsController, UpdateClientController } from "../controllers/clients.controller";
import {  CreateContactController, DeleteContactsController, GetContactsController, UpdateContactsController } from "../controllers/contacts.controller";
import { LoginController } from "../controllers/login.controller";
import { tokenValidation } from "../middlewares/token.middleware";

const clientRoutes = Router()

clientRoutes.post("", CreateClientController)
clientRoutes.get("", GetClientsController)
clientRoutes.patch("/:id", tokenValidation, UpdateClientController)
clientRoutes.delete("/:id", tokenValidation, DeleteClientController)

const contactRoutes = Router()

contactRoutes.post("", CreateContactController)
contactRoutes.get("/:id", GetContactsController)
contactRoutes.delete("/:id", tokenValidation, DeleteContactsController)
contactRoutes.patch("/:id", tokenValidation, UpdateContactsController)

const loginRoute = Router()

loginRoute.post("", LoginController)

export { clientRoutes, contactRoutes, loginRoute}