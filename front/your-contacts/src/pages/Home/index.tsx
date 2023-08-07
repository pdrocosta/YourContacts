import { useEffect, useState } from "react";
import { api } from "../../services/api";

export interface Contact {
  id: string;
  name: string;
  telephone: string;
}

export interface Client {
  id: string;
  name: string;
  telephone: string;
  contacts: Contact[];
}

export const HomePage = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      const clients = await api.get<Client[]>("clients");
      setClients(clients.data);
      const contacts = await api.get<Contact[]>("contacts");
      setContacts(contacts.data);
    })();
  }, []);
  return (
    <>
      <h1>Homepage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
      <ul>
        {contacts.map((contacts) => (
          <li key={contacts.id}>{contacts.name}</li>
        ))}
      </ul>
    </>
  );
};
