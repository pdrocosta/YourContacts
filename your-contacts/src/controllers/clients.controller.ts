import { Response, Request } from "express";
import { DeleteClientService, GetClientsService, UpdateClientService, createClientService } from "../services/clients.services";
import { TClient } from "../interfaces/interfaces";

const CreateClientController = async (req: Request, res: Response):Promise<Response> => {
    const newClient = await createClientService(req.body)
    return res.status(201).json(newClient)
}

const GetClientsController = async (req: Request, res: Response):Promise<Response> => {
    return res.status(201).json(await GetClientsService())
}

const UpdateClientController = async (req: Request, res: Response) => {
    const clientID: number = Number(req.params.id)
    const newClient : TClient = await UpdateClientService(req.body, clientID)

    return res.status(200).json(newClient)
}

const DeleteClientController = async (req: Request, res: Response): Promise<Response> => {
    const clientID: number = Number(req.params.id)
    const deletedClient = await DeleteClientService(clientID)
    return res.status(200).json(deletedClient)
}


export { CreateClientController,DeleteClientController, GetClientsController, UpdateClientController }