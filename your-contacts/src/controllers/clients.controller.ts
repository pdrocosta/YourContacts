import { Response, Request } from "express";
import { DeleteClientService, GetClientsService, UpdateClientService, createClientService } from "../services/clients.services";

const CreateClientController = async (req: Request, res: Response) => {
    const newClient = await createClientService(req.body);
    return res.status(201).json(newClient);
  };
  
  const GetClientsController = async (req: Request, res: Response) => {
    const clients = await GetClientsService();
    return res.status(200).json(clients);
  };
  
  const UpdateClientController = async (req: Request, res: Response) => {
    const clientId: number = Number(req.params.id);
    const updatedClient = await UpdateClientService(req.body, clientId);
    return res.status(200).json(updatedClient);
  };
  
  const DeleteClientController = async (req: Request, res: Response) => {
    const clientId: number = Number(req.params.id);
    const result = await DeleteClientService(clientId);
    return res.status(200).json(result);
  };


export { CreateClientController,DeleteClientController, GetClientsController, UpdateClientController }