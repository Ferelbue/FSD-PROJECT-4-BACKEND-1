
# Tattoo Studio API :black_nib:

This is the 4th project of the GeeksHubs Academy Fullstack Developer Bootcamp, showcasing a real-world backend development skills with TypeScript and MYSQL.
The projetc consists in develop the backend for the appointment management system of a tattoo studio.
***
## Table of Contents :file_folder:

- [Stack 🛠️](#stack)
- [Features 🌟](#features-)
- [Live Deployment 📡](#live-deployment-)
- [Installation 🚀](#installation-)
- [API Documentation 📘](#api-documentation-)
  - [Database Design 📖](#database-design-)
  - [Relationships](#relationships)
  - [Indices and Constraints](#indices-and-constraints)
  - [API Endpoints 🔌](#api-endpoints-)
- [Author ✒️](#author-)
- [Roadmap 🛣️](#roadmap-️)
- [Acknowledgements 🎓](#acknowledgements-)

***
## Stack 🛠️
<div align="center">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
<img src="https://img.shields.io/badge/railway-000000?style=for-the-badge&logo=railway&logoColor=white" alt="JWT" />
 </div>

***
## Features 🌟

- **User Authentication:** Secure signup and login processes. 🔒
- **Appointment Creation:** Users can book appointments, with date and user profile validation. 📅
- **Admin and SuperAdmin CRUD Endpoints:** Full control over users, appointments and services for administrators. 👩‍💼👨‍💼
- **Acurate Documentation:** Fully documented API endpoints. 📚
- **Docker Container:** Easy setup and deployment with Docker. 🐳
- **MySQL Database with TypeORM and Migrations:** Robust database management. 🗄️
- **Mock Data Generation:** Realistic data generation with Faker.js. 🤖
- **JWT Authentication:** Secure API endpoints with JSON Web Tokens. 🔑
- **Error Handling:** Custom error middleware for handling common API errors. 📝

***
## Live Deployment 📡

Try out the API at:

> []()

***
## Installation 🚀
- #### GitHub 🐾
  - Get a copy of the project up and running on your local machine:

    ```sh
    git clone https://github.com/Ferelbue/FSD-PROJECT-4-BACKEND-1.git
    ```

- #### Docker 🐳
  - You'll need Docker installed on your machine:
    ```sh
    $ docker run --name nombre-contenedor -p 3307:3306 -e MYSQL_ROOT_PASSWORD=1234 -d mysql
    ```

- #### MySQL Workbench 🔧
  - Create and running a new server conection with the port, user and passwors establised.

- #### Node 📟
  - Run directly with Node: 
    ```sh
    npm install             # Install dependecies
    npm run migrations-run  # Run migrations
    npm run seed            # Poblate DB with mock
    npm run dev             # Run server
    ```

    ⚠️You'll need add a `.env` based on the provided `.env.example` file with the database credentials⚠️

***
## API Documentation 📘



  - ### Database Design 📖

<img width="803" alt="ERD" src="./img/DB_design.png">

***
  - ### Relationships
    - `Role` to `Users`: One-to-many relationship where:
      - One role can have many users.

    - `User` to `Appointments`: One-to-many relationship where:
      - One user can have many appointments.

    - `Service` to `Appointments`: One-to-many relationship where:
      - One service can have many appointments.
***
  - ### Indices and Constraints

    - `Users` table:
      - Unique constraint on `email` to ensure each user has a unique email address.
      - Foreign key constraint on `role_id` referring to `id` in the `Roles` table.
    - `Appointments` table:
      - Foreign key constraint on `service_id` and `user_id` referring to `id` in the `Users` and `Services` tables.

***
  - ### Endpoints 🔌

  (Click to expand)


<details>
  <summary style="font-weight: bold; font-size: 1.3em;">User Endpoints</summary>
  
##### Public 🌍

- `GET /api/services` - List all tattoo services.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        fhsdljkfsdjfsdjfdsf
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Body</summary>

            {
                "user": "David",
                "email": "david@david.com",
                "password": "princes"
            }
        
    </details>



##### Authentication 🔒

- `POST /api/auth/register` - Register a new user.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        fhsdljkfsdjfsdjfdsf
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Body</summary>

            {
                "user": "David",
                "email": "david@david.com",
                "password": "princes"
            }
        
    </details>
- `POST /api/auth/login` - Login an existing user.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        fhsdljkfsdjfsdjfdsf
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Body</summary>

            {
                "user": "David",
                "email": "david@david.com",
                "password": "princes"
            }
        
    </details>
##### Users 👤

- `GET /api/users/me` - Retrieve authenticated user's profile.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        fhsdljkfsdjfsdjfdsf
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Body</summary>

            {
                "user": "David",
                "email": "david@david.com",
                "password": "princes"
            }
        
    </details>
- `PUT /api/users/me` - Update authenticated user's profile.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        fhsdljkfsdjfsdjfdsf
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Body</summary>

            {
                "user": "David",
                "email": "david@david.com",
                "password": "princes"
            }
        
    </details>

##### Appointments 📅

- `GET /api/appointments/my` - Retrieve user's appointments.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        fhsdljkfsdjfsdjfdsf
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Body</summary>

            {
                "user": "David",
                "email": "david@david.com",
                "password": "princes"
            }
        
    </details>

- `GET /api/appointments/my/{id}` - Retrieve details of a specific appointment.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        fhsdljkfsdjfsdjfdsf
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Body</summary>

            {
                "user": "David",
                "email": "david@david.com",
                "password": "princes"
            }
        
    </details>

</details>

<details>
<summary style="font-weight: bold; font-size: 1.3em;"><i>Admin endpoints</i></summary>

##### Admin CRUD Endpoints - Users 👩‍💼👨‍💼

- `GET /api/users` - List all users.
- `POST /api/users` - Create a new user.
- `GET /api/users/{id}` - Retrieve a user by ID.
- `PUT /api/users/{id}` - Update a user by ID.
- `DELETE /api/users/{id}` - Delete a user by ID.
- `PUT /api/users/setAsTattooist/{id}` - Set a user as a tattooist.

##### Admin CRUD Endpoints - Appointments 📅

- `GET /api/appointments` - List all appointments.
- `POST /api/appointments` - Create a new appointment.
- `GET /api/appointments/{id}` - Retrieve a specific appointment by ID.
- `PUT /api/appointments/{id}` - Update a specific appointment by ID.
- `DELETE /api/appointments/{id}` - Delete a specific appointment by ID.

##### Admin CRUD Endpoints - TattooWorks 🎨

- `POST /api/tattooWorks` - Create a new tattoo work.
- `PUT /api/tattooWorks/{id}` - Update a tattoo work by ID.
- `DELETE /api/tattooWorks/{id}` - Delete a tattoo work by ID.

</details>

***
## Roadmap 🛣️

- **Add notifications** - So users know when their appointments are modified, created or deleted.
- **Add a React frontend** - So users can interact with the API from a web browser.

***
## Author :black_nib:
- **Fernando Elegido** - Full Stack Developer
  - [GitHub](https://github.com/ferelbue) - [LinkedIn](https://www.linkedin.com/in/ferelbue)
***

## Acknowledgements :mortar_board:

- Great appreciation to **Geekshubs Academy** for the opportunity to learn and grow as a developer.

***

[Top of document](#tattoo-studio-api-🖋️)