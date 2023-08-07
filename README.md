# YourContacts

This repository contains a RESTful API with various routes for managing clients and contacts. The API is built using Node.js and Express.js. Below are the details of the available routes and their functionalities.


## API Routes

### Client Routes

#### Create a Client
- Method: POST
- Endpoint: `/clients`
- Controller: `CreateClientController`
- Description: Create a new client.
- Body Parameters: JSON object containing client details.

#### Get Clients
- Method: GET
- Endpoint: `/clients`
- Controller: `GetClientsController`
- Description: Retrieve a list of all clients.

#### Update a Client
- Method: PATCH
- Endpoint: `/clients/:id`
- Controller: `UpdateClientController`
- Middleware: `tokenValidation`
- Description: Update details of an existing client.
- URL Parameters: `id` - ID of the client to update.
- Body Parameters: JSON object containing client details to update.

#### Delete a Client
- Method: DELETE
- Endpoint: `/clients/:id`
- Controller: `DeleteClientController`
- Middleware: `tokenValidation`
- Description: Delete a client.
- URL Parameters: `id` - ID of the client to delete.

### Contact Routes

#### Create a Contact
- Method: POST
- Endpoint: `/contacts`
- Controller: `CreateContactController`
- Description: Create a new contact.
- Body Parameters: JSON object containing contact details.

#### Get Contacts
- Method: GET
- Endpoint: `/contacts/:id`
- Controller: `GetContactsController`
- Description: Retrieve contacts associated with a specific client.
- URL Parameters: `id` - ID of the client whose contacts to retrieve.

#### Update a Contact
- Method: PATCH
- Endpoint: `/contacts/:id`
- Controller: `UpdateContactsController`
- Middleware: `tokenValidation`
- Description: Update details of a contact.
- URL Parameters: `id` - ID of the contact to update.
- Body Parameters: JSON object containing contact details to update.

#### Delete a Contact
- Method: DELETE
- Endpoint: `/contacts/:id`
- Controller: `DeleteContactsController`
- Middleware: `tokenValidation`
- Description: Delete a contact.
- URL Parameters: `id` - ID of the contact to delete.

### Login Route

#### User Login
- Method: POST
- Endpoint: `/login`
- Controller: `LoginController`
- Description: Authenticate a user and obtain an access token.
- Body Parameters: JSON object containing user credentials.


