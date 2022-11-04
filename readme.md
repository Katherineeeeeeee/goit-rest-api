# Rest Api Application

Currently, I'm working on a REST API to work with a collection of contacts.

## Structure
```
├── controllers
│   ├── contacts
│          ├── index.js
│          ├── add.js
│          ├── getAll.js
│          ├── getById.js
│          ├── remove.js
│          ├── updateById.js
│          ├── updateFavorite.js  
├── helpers       
│     ├── index.js
│     ├── ctrlWrapper.js
│     ├── RequestError.js
│     ├── handleSaveErrors.js
│     
├── middlewares
│        ├── index.js
│        ├── isValidId.js
│        ├── validateBody.js
│
├── models
│      └── contact.js
│
├── routes
       ├── api
            └── contacts.js
```

## API

#### /contacts
* `GET` : Get all contacts
* `POST` : Create a new contact

#### /contacts/:id
* `GET` : Get a contact
* `PUT` : Update a contact
* `DELETE` : Delete a contact

#### /contacts/:contactId/favorite
* `PATCH` : Update the favorite field
