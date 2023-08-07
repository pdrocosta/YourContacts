import { Repository } from "typeorm";
import { TContact, TContactRequest } from "../interfaces/interfaces";
import { contactSchema } from "../schemas/contact.schema";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entite";
import { Client } from "../entities/client.entitie";



const createContactService = async (data: TContactRequest): Promise<string> => {
    const { email, name, telephone, client } = data;
    const contactRepository = AppDataSource.getRepository(Contact);
    const findcontact = await contactRepository.findOne({
      where: {
        email,
      },
    });
  
    if (findcontact) {
      throw new AppError("Email already in use", 409);
    }
  
    const clientRepo = AppDataSource.getRepository(Client);
    const clientCheck: Client | null = await clientRepo.findOne(data.client);
  
    if (!clientCheck) {
      throw new AppError("Client not found", 401);
    }
  
    const contact = contactRepository.create({
      email,
      name,
      telephone,
      client: clientCheck,
    });
  
    await contactRepository.save(contact);
    return "New contact created";
  };
  
  const GetcontactsService = async (): Promise<TContact[]> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(
      Contact
    );
    const contacts: Contact[] = await contactRepository.find();
    const returncontacts: TContact[] = contacts.map((contact) =>
      contactSchema.parse(contact)
    );
    return returncontacts;
  };
  
  const UpdatecontactService = async (
    data: TContactRequest,
    id: number
  ): Promise<TContact> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOne(id);
  
    if (!contact) {
      throw new AppError("Contact not found", 401);
    }
  
    if (data.email) {
      contact.email = data.email;
    }
    if (data.name) {
      contact.name = data.name;
    }
    if (data.telephone) {
      contact.telephone = data.telephone;
    }
    if (data.client) {
      const clientRepo = AppDataSource.getRepository(Client);
      const client: Client | null = await clientRepo.findOne(data.client);
  
      if (!client) {
        throw new AppError("Client not found", 401);
      }
      contact.client = client;
    }
  
    await contactRepository.save(contact);
    return contactSchema.parse(contact);
  };
  
  const DeletecontactService = async (id: number): Promise<string> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOne(id);
  
    if (!contact) {
      throw new AppError("Contact not found", 401);
    }
    await contactRepository.delete(contact);
    return "Contact deleted";
};
  
export { createContactService, DeletecontactService, UpdatecontactService, GetcontactsService }