# README.md

IMPORTANT: Once you've cloned this to your forked repository, ensure that you continuously update this document as you complete each task to demonstrate your ongoing progress.

Please include your shared repository link here:

Example:
Choiru's shared repository: https://github.com/choiruzain-latrobe/Assignment2.git

Make sure for **your case it is in Private**

## Access Database

1 **Plsql Cheat Sheet:**
You can refer to the PostgreSQL cheat sheet [here](https://www.postgresqltutorial.com/postgresql-cheat-sheet/).

2 **Know the Container ID:**
To find out the container ID, execute the following command:

```bash
docker ps
 9958a3a534c9   testsystem-nginx           "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp   testsystem-nginx-1
 53121618baa4   testsystem-frontend        "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   3000/tcp             testsystem-frontend-1
 c89e46ac94b0   testsystem-api             "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5000/tcp             testsystem-api-1
 9f4aea7cf538   postgres:15.3-alpine3.18   "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5432/tcp             testsystem-db-1
```

3. Running the application

**docker compose command:**

```bash
docker compose up --build
```

4 **Access postgreSQL in the container:**
Once you have the container ID, you can execute the container using the following command:
You will see the example of running the PostgreSQL inside the container.

```bash
docker exec -it testsystem-db-1 psql -U postgres
choiruzain@MacMarichoy TestSystem % docker exec -it testsystem-db-1 psql -U postgres
psql (15.3)
Type "help" for help.

postgres=# \dt
          List of relations
 Schema |   Name   | Type  |  Owner
--------+----------+-------+----------
 public | contacts | table | postgres
 public | phones   | table | postgres
(2 rows)

 postgres=# select * from contacts;
 id |  name  |         createdAt         |         updatedAt
----+--------+---------------------------+---------------------------
  1 | Helmut | 2024-08-08 11:57:57.88+00 | 2024-08-08 11:57:57.88+00
 (1 row)
 postgres=# select * from phones;
 id | phone_type |   number    | contactId |         createdAt          |         updatedAt
----+------------+-------------+-----------+----------------------------+----------------------------
  1 | Work       | 081431      |         1 | 2024-08-08 11:59:04.386+00 | 2024-08-08 11:59:04.386+00


postgres=# select * from contacts;
```

Replace `container_ID` with the actual ID of the container you want to execute.

## Executing API

### Contact API

1. Add contacts API (POST)

```bash
http post http://localhost/api/contacts name="Choiru"

choiruzain@MacMarichoy-7 TestSystem % http post http://localhost/api/contacts name="Choiru"
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 102
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:01:53 GMT
ETag: W/"66-FmPYAaIkyQoroDwP2JsAZjWTAxs"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}

```

2 Get contacts API (GET)

```bash
http get http://localhost/api/contacts


choiruzain@MacMarichoy-7 TestSystem % http get http://localhost/api/contacts
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 104
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:04:58 GMT
ETag: W/"68-V+4KuL2xahYt8YAkKG6rKdR7wHg"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

[
{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}
]


```

3. Show/create the API commmand to delete the contacts (DELETE)

```bash





```

4. Show/create the API command to edit the contacts (PUT)

```
http get http://localhost/api/contacts/1/phones

```

### Phone API

Task 1:

1. Select file Contact.js then change "Delete" at the line 48 to "Delete Contact"

![alt text](./frontend/public/IMG/1.1.png)
![alt text](./frontend/public/IMG/1.2.png)
![alt text](./frontend/public/IMG/1.3.png)

2. Select file NewPhone.js then change "Add" at the line 61 to "Add {contact.name}"

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

task 2

1. ![alt text](./frontend/public/IMG/2-1.png)
2. ![alt text](./frontend/public/IMG/2-2.png) 3.![alt text](./frontend/public/IMG/2-3.png) 4.![alt text](./frontend/public/IMG/2-4.png) 5.![alt text](./frontend/public/IMG/2-5.png) 6.![alt text](./frontend/public/IMG/2-6.png) 7.![alt text](./frontend/public/IMG/2-7.png) 8.![alt text](./frontend/public/IMG/2-8.png)

task 3

1.

![alt text](./frontend/public/IMG/3-1.1.png)
![alt text](./frontend/public/IMG/3-1.2.png)
![alt text](./frontend/public/IMG/3-1.3.png)
![alt text](./frontend/public/IMG/3-1.4.png)

2.

![alt text](./frontend/public/IMG/3-2.1.png)
![alt text](./frontend/public/IMG/3-2.2.png)
![alt text](./frontend/public/IMG/3-2.3.png)
![alt text](./frontend/public/IMG/3-2.4.png)

3.

![alt text](./frontend/public/IMG/3-3.1.png)
![alt text](./frontend/public/IMG/3-3.2.png)
![alt text](./frontend/public/IMG/3-3.3.png)
![alt text](./frontend/public/IMG/3-3.4.png)
![alt text](./frontend/public/IMG/3-3.5.png)
![alt text](./frontend/public/IMG/3-3.6.png)
![alt text](./frontend/public/IMG/3-3.7.png)
![alt text](./frontend/public/IMG/3-3.8.png)

4.

![alt text](./frontend/public/IMG/3-4.1.png)
![alt text](./frontend/public/IMG/3-4.2.png)
![alt text](./frontend/public/IMG/3-4.3.png)
![alt text](./frontend/public/IMG/3-4.4.png)
![alt text](./frontend/public/IMG/3-4.5.png)
![alt text](./frontend/public/IMG/3-4.6.png)
![alt text](./frontend/public/IMG/3-4.7.png)
![alt text](./frontend/public/IMG/3-4.8.png)

\*Front-end user
![alt text](./frontend/public/IMG/3-5.1.png)
![alt text](./frontend/public/IMG/3-5.2.png)
