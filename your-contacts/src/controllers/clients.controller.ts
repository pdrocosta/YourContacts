import { Response, Request } from "express";
import { createClientService } from "../services/clients.services";

const CreateClientController = async (req: Request, res: Response) => {
    const newClient = await createClientService(req.body)

    return res.status(201).json(newClient)
}

const GetClientController = async (req: Request, res: Response) => {
    const newClient = await GetClientService(req.body)

    return res.status(201).json(newClient)
}

const UpdateClientController = async (req: Request, res: Response) => {
    const newClient = await UpdateClientService(req.body)

    return res.status(201).json(newClient)
}

const DeleteClientController = async (req: Request, res: Response) => {
    const newClient = await DeleteClientService(req.body)

    return res.status(201).json(newClient)
}


export { CreateClientController,DeleteClientController, GetClientController, UpdateClientController }