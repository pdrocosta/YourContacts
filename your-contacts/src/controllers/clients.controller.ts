import { Response, Request } from "express";
import { createClientService } from "../services/clients.services";

const CreateClientController = async (req: Request, res: Response) => {
    const newClient = await createClientService(req.body)

    return res.status(201).json(newClient)
}

export { CreateClientController }