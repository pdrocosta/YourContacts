import { Repository } from "typeorm";
import { TClient, TClientRequest } from "../interfaces/interfaces";
import { clientSchema } from "../schemas/client.schema";
import { Client } from "../entities/client.entitie";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";



const createClientService = async (data: TClientRequest): Promise<string> => {
    const { email, name, telephone } = data;
    const clientRepository = AppDataSource.getRepository(Client);
    const findClient = await clientRepository.findOne({
      where: {
        email,
      },
    });
  
    if (findClient) {
      throw new AppError("Client already exists", 409);
    }
  
    const client = clientRepository.create({
      email,
      name,
      telephone,
    });
  
    await clientRepository.save(client);
    return "New client created";
  };
  
  const GetClientsService = async (): Promise<TClient[]> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(
      Client
    );
    const clients: Client[] = await clientRepository.find();
    return clients;
  };
  
  const UpdateClientService = async (
    data: TClientRequest,
    id: number
  ): Promise<TClient> => {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOne(id);
  
    if (!client) {
      throw new AppError("Client not found", 401);
    }
  
    if (data.email) {
      client.email = data.email;
    }
    if (data.name) {
      client.name = data.name;
    }
    if (data.telephone) {
      client.telephone = data.telephone;
    }
  
    await clientRepository.save(client);
    return clientSchema.parse(client);
  };
  
  const DeleteClientService = async (id: number): Promise<string> => {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOne(id);
  
    if (!client) {
      throw new AppError("Client not found", 401);
    }
    await clientRepository.delete(client);
    return "Client deleted";
  };

export { createClientService, DeleteClientService, UpdateClientService, GetClientsService }