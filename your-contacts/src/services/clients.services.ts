import { Repository } from "typeorm";
import { TClient, TClientRequest, TClients } from "../interfaces/interfaces";
import { clientsSchema } from "../schemas/client.schema";
import { Client } from "../entities/client.entitie";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";



const createClientService = async (data: TClientRequest): Promise<string> => {
    const { email, name, telephone } = data
    const ClientRepository = AppDataSource.getRepository(Client)
    const findClient = await ClientRepository.findOne({
        where: {
            email
        }
    })

    if (findClient) {
        throw new AppError("Client already exists", 409)
    }

    const client = ClientRepository.create({
        email, name, telephone
    })

    await ClientRepository.save(client)
    return "New client created"
}

const GetClientsService = async (): Promise<TClients> => {
    const ClientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const clients: Client[] = await ClientRepository.find()
    const returnClients: TClients = clientsSchema.parse(clients)
    return returnClients
}

const UpdateClientService = async (data: TClientRequest, id: number): Promise<TClient> => {
    const ClientRepository = AppDataSource.getRepository(Client)
    const client: TClient | null = await ClientRepository.findOneBy({ id: id })

    if (!client) {
        throw new AppError("Client not found", 401)
    }

    const clientInfos = ({ ...client })

    if (data.email) {
        clientInfos.email = data.email
    }
    if (data.name) {
        clientInfos.name = data.name
    }
    if (data.telephone) {
        clientInfos.telephone = data.telephone
    }

    const saveNewInfos = await ClientRepository.save(clientInfos);
    return saveNewInfos
}


const DeleteClientService = async (id: number): Promise<string> => {
    const ClientRepository = AppDataSource.getRepository(Client)
    const client: TClient | null = await ClientRepository.findOneBy({ id: id })

    if (!client) {
        throw new AppError("Client not found", 401)
    }
    await ClientRepository.delete(client)
    return "Client deleted"
}

export { createClientService, DeleteClientService, UpdateClientService, GetClientsService }