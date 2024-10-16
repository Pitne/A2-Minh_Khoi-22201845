# Task 1:

1. Rename the "Delete" button to "Delete Contact" in Contact.js
   ![alt text](./frontend/public/IMG/1.1.png)
   ![alt text](./frontend/public/IMG/1.2.png)
   ![alt text](./frontend/public/IMG/1.3.png)

2. Rename the "Add" button to "Add {contact.name}" in NewPhone.js
   ![alt text](./frontend/public/IMG/2.1.png)
   ![alt text](./frontend/public/IMG/2.2.png)
   ![alt text](./frontend/public/IMG/2-3-4.3.png)

3. Select file NewPhone.js then replace

   <input
   type="text"
   placeholder="Name"
   onChange={(e) => setName(e.target.value)}
   value={name}
   />

by

<select value={name} onChange={(e) => setName(e.target.value)}>

<option value="">Select Category</option>
<option value="home">Home</option>
<option value="work">Work</option>
<option value="mobile">Mobile</option>
<option value="other">Other</option>
</select>

to display the drop-menu with 4 categories

![alt text](./frontend/public/IMG/3.1.png)
![alt text](./frontend/public/IMG/3.2.png)
![alt text](./frontend/public/IMG/2-3-4.3.png)

4.Select file PhoneList.js then in the <tr> element of the table change the label "Name" to "Phone Type"

![alt text](./frontend/public/IMG/4.1.png)
![alt text](./frontend/public/IMG/4.2.png)
![alt text](./frontend/public/IMG/2-3-4.3.png)

## task 2:

1. Show Contact
   ![alt text](./frontend/public/IMG/2-1.png)
2. Add Contact
   ![alt text](./frontend/public/IMG/2-2.png)
3. Delete Contact
   ![alt text](./frontend/public/IMG/2-3.png)
4. Update Contact
   ![alt text](./frontend/public/IMG/2-4.png)
5. Show Phone
   ![alt text](./frontend/public/IMG/2-5.png)
6. Add Phone
   ![alt text](./frontend/public/IMG/2-6.png)
7. Delete Phone
   ![alt text](./frontend/public/IMG/2-7.png)
8. Update Phone
   ![alt text](./frontend/public/IMG/2-8.png)

### task 3:

1. Modified the contacts table to include the "id", "Name" and "Address"

- before

![alt text](./frontend/public/IMG/3-1.1.png)

- after

![alt text](./frontend/public/IMG/3-1.2.png)

- before

![alt text](./frontend/public/IMG/3-1.3.png)

-after

![alt text](./frontend/public/IMG/3-1.4.png)

2. Modified the phones table to include "id", "phone_type", "phone_number", and "contact_id"

- Before

![alt text](./frontend/public/IMG/3-2.1.png)

- After

  ![alt text](./frontend/public/IMG/3-2.2.png)

- before

  ![alt text](./frontend/public/IMG/3-2.3.png)

- after

  ![alt text](./frontend/public/IMG/3-2.4.png)

3. Adjusted the front_end to reflect these database changes
   ![alt text](./frontend/public/IMG/3-3.1.png)
   ![alt text](./frontend/public/IMG/3-3.2.png)
   ![alt text](./frontend/public/IMG/3-3.3.png)
   ![alt text](./frontend/public/IMG/3-3.4.png)
   ![alt text](./frontend/public/IMG/3-3.5.png)
   ![alt text](./frontend/public/IMG/3-3.6.png)
   ![alt text](./frontend/public/IMG/3-3.7.png)
   ![alt text](./frontend/public/IMG/3-3.8.png)

4. Tested all APIs associated with the modified tables:

- GET contacts

![alt text](./frontend/public/IMG/3-4.1.png)

- POST contacts

![alt text](./frontend/public/IMG/3-4.2.png)

- DELETE contacts

![alt text](./frontend/public/IMG/3-4.3.png)

- PUT contacts

![alt text](./frontend/public/IMG/3-4.4.png)

- GET phones

![alt text](./frontend/public/IMG/3-4.5.png)

- POST phones

![alt text](./frontend/public/IMG/3-4.6.png)

- DELETE phones

![alt text](./frontend/public/IMG/3-4.7.png)

- PUT phones

![alt text](./frontend/public/IMG/3-4.8.png)

\*Front-end user

![alt text](./frontend/public/IMG/3-5.1.png)
![alt text](./frontend/public/IMG/3-5.2.png)

### task 4:

1-1. Create a new file named `company.model.js` in `./api/models` then define the `Company` model

![alt text](./frontend/public/IMG/4-1.1.png)

1-2. Import new `company.model.js` sequelize file to PostgreSQL database via `./api/models/index.js` **_line-25_**

![alt text](./frontend/public/IMG/4-1.2.png)

1-3. Check the database after configured `./api/models/index.js`

![alt text](./frontend/public/IMG/4-1-2.png)

2-1. Create a new controller file for `company` named `company.controller.js` in `./api/controllers/` and import database from `./models` then define `const Company` to make sure the Combany model can access from databse object

![alt text](./frontend/public/IMG/4-1.3.png)

2-2. Create a new company for specific contact method in `company.controller.js`

![alt text](./frontend/public/IMG/4-1.4.png)

2-3. Create a save company in the database

![alt text](./frontend/public/IMG/4-1.5.png)

2-4. Create a get all companies associated with a specific contact method in `company.controller.js`

![alt text](./frontend/public/IMG/4-1.6.png)

2-5. Create get a single company based on both the `companyId` and `contactId` method in `company.controller.js`

![alt text](./frontend/public/IMG/4-1.7.png)

2-6. Create a updates a company's details based on the `companyId` and `contactId` method in `company.controller.js`

![alt text](./frontend/public/IMG/4-1.8.png)

2-7. Create a deletes a company from the database based on the `companyId` and `contactId` method in `company.controller.js`

![alt text](./frontend/public/IMG/4-1.9.png)

2-8. Create a file called `companies.routes.js` in ./api/routes to define the API endpoints for interacting with the company resources

![alt text](./frontend/public/IMG/4-1.11.png)

2-9.

- Register the routes in main app file which is `app.js` in `./api/app.js`

![alt text](./frontend/public/IMG/4-1.10.png)

3. API testing

- POST company

![alt text](./frontend/public/IMG/4-3.1.png)

- GET company

![alt text](./frontend/public/IMG/4-3.2.png)

- PUT company

![alt text](./frontend/public/IMG/4-3.3.png)

- DELETE company

![alt text](./frontend/public/IMG/4-3.4.png)

##### task 5:

1.1. To ensure including all function sort of adding, edditing, deleting and updating records we have to create 3 files `Companylist.js`, `Company.js`, `NewCompany.js`

1.2. For adding a new company via front-end, create `NewCompany.js` in `./src/components`

- This component contains a form to allow the user to add a new company and linked through back-end and connected to database.

![alt text](./frontend/public/IMG/5-1.2.png)

1.3. For displays a company and edit or delete buttons via front-end, create `Company.js` in `./src/components` to appear those function

- This component is responsible for rendering a single company in the data also provides the functionality to edit and delete a company.

![alt text](./frontend/public/IMG/5-1.3.png)
![alt text](./frontend/public/IMG/5-1.3.2.png)

1.4. For the main componenent that handles the list of companies for a specific contact, create `Companylist.js` in `./src/components`

- This component acts as the parent components for `Company` and `Newcompany`. It fetches the list of companies from the back-end and renders each company in a table row.

![alt text](./frontend/public/IMG/5-1.4.png)

1.5. After creeated 3 component files the last but not list step is intergrating `CompanyList` into `Contact.js` to ensure that `companies` is related to each contacts are displayed below the contact's detail, alongside phone numbers.

**_Line 58_**

![alt text](./frontend/public/IMG/5-1.5.png)

/\* Front-end user:

![alt text](./frontend/public/IMG/5-1.6.png)
