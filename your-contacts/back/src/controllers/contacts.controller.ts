import { Response, Request } from "express";
import { createContactService, GetcontactsService, DeletecontactService, UpdatecontactService } from "../services/contacts.services";

const CreateContactController = async (req: Request, res: Response) => {
    const newContact = await createContactService(req.body);
    return res.status(201).json(newContact);
  };
  
  const GetContactsController = async (req: Request, res: Response) => {
    const contacts = await GetcontactsService();
    return res.status(200).json(contacts);
  };
  
  const DeleteContactsController = async (req: Request, res: Response) => {
    const contactId: number = Number(req.params.id);
    const result = await DeletecontactService(contactId);
    return res.status(200).json(result);
  };
  
  const UpdateContactsController = async (req: Request, res: Response) => {
    const contactId: number = Number(req.params.id);
    const updatedContact = await UpdatecontactService(req.body, contactId);
    return res.status(200).json(updatedContact);
  };


export { CreateContactController, DeleteContactsController, GetContactsController, UpdateContactsController }