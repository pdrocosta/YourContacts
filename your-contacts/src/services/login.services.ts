import { TUser } from "../interfaces/interfaces"

export const LoginService = async (data: TUser): Promise<Response> => {
    const { email, password } = data
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