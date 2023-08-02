import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/Client.entitie";
import { AppError } from "../../errors/AppError";
import { ClientSchemaResponse } from "../../schemas/clients.schema";



const createClientService = async (data: TClientRequest): Promise<TClientResponse> => {
    const { email } = data
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
        data
    })

    await ClientRepository.save(client)
    return ClientSchemaResponse.parse(client)
}

const GetClientService = async (data: TClientRequest): Promise<TClientResponse> => {
    const { email } = data
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
        data
    })

    await ClientRepository.save(client)
    return ClientSchemaResponse.parse(client)
}

const UpdateClientService = async (data: TClientRequest): Promise<TClientResponse> => {
    const { email } = data
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
        data
    })

    await ClientRepository.save(client)
    return ClientSchemaResponse.parse(client)
}

const DeleteClientService = async (data: TClientRequest): Promise<TClientResponse> => {
    const { email } = data
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
        data
    })

    await ClientRepository.save(client)
    return ClientSchemaResponse.parse(client)
}

export { createClientService, DeleteClientService, UpdateClientService,GetClientService    }