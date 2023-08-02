import { Response, Request } from "express";
import { createClientService } from "../services/clients.services";

const CreateContactController = async (req: Request, res: Response) => {
    const newClient = await createClientService(req.body)

    return res.status(201).json(newClient)
}

const GetContactsController = async (req: Request, res: Response) => {
    const newClient = await createClientService(req.body)

    return res.status(201).json(newClient)
}

const DeleteContactsController = async (req: Request, res: Response) => {
    const newClient = await createClientService(req.body)

    return res.status(201).json(newClient)
}

const UpdateContactsController = async (req: Request, res: Response) => {
    const newClient = await createClientService(req.body)

    return res.status(201).json(newClient)
}


export { CreateContactController, DeleteContactsController, GetContactsController, UpdateContactsController }