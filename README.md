
# Tattoo Studio API :black_nib:

This is the 4th project of the GeeksHubs Academy Fullstack Developer Bootcamp, showcasing a real-world backend development skills with TypeScript and MYSQL.
The projetc consists in develop the backend for the appointment management system of a tattoo studio.
***
## Table of Contents :file_folder:

- [Stack 🔧](#stack-wrench)
- [Features 🌟](#features-star2)
- [Live Deployment 📡](#live-deployment-satellite)
- [Installation 🚀](#installation-rocket)
- [API Documentation 📑](#api-documentation-bookmark_tabs)
    - [Database Design 📰](#database-design-newspaper)
    - [Relationships ♻️](#relationships-recycle)
    - [Indices and Constraints ➡️](#indices-and-constraints-arrow_right)
    - [Endpoints 🔌](#endpoints-electric_plug)
- [Author ✒️](#author-black_nib)
- [Next versions 🔜](#next-versions-soon)
- [Acknowledgements 🎓](#acknowledgements-mortar_board)

***
## Stack :wrench:
<div align="center">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/JWT-FF6C37?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />

 </div>

***
## Features :star2:

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
## Live Deployment :satellite:

Try out the API at:

> []()

***
## Installation :rocket:
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
## API Documentation :bookmark_tabs:

  - ### Database Design :newspaper:

<img width="803" alt="ERD" src="./img/DB_design.png">

***
  - ### Relationships :recycle:
    - `Role` to `Users`: One-to-many relationship where:
      - One role can have many users.

    - `User` to `Appointments`: One-to-many relationship where:
      - One user can have many appointments.

    - `Service` to `Appointments`: One-to-many relationship where:
      - One service can have many appointments.
***
  - ### Indices and Constraints :arrow_right:

    - `Users` table:
      - Unique constraint on `email` to ensure each user has a unique email address.
      - Foreign key constraint on `role_id` referring to `id` in the `Roles` table.
    - `Appointments` table:
      - Foreign key constraint on `service_id` and `user_id` referring to `id` in the `Users` and `Services` tables.

***
  - ### Endpoints :electric_plug:

  (Click to expand)


<details>
  <summary style="font-weight: bold; font-size: 1.3em;">User Endpoints</summary>
  
##### Public 🌍

- `GET /api/services` - List all tattoo services.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Anyone with an internet connection can visit the studio's services.
    </details>

##### Authentication 🔒

- `POST /api/auth/register` - Register a new user.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Forbidden to repeat an email address already registered. Last name and role are not mandatory. 
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">BODY</summary>

        {
          "firstName": "Pepe",
          "lastName": "Perez",
          "email": "pepe@pepe.com",
          "password": "123456",
          "roleId": "1"
        }
        
    </details>
- `POST /api/auth/login` - Login an existing user.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be already registered in the aplication. Important to introduce the email and password successfully.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">BODY</summary>

        {
          "email": "pepe@pepe.com",
          "password": "123456"
        }
        
    </details>
##### Users 👤

- `GET /api/users` - Retrieve authenticated user's profile.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly. Forbiden to see others profiles.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>
- `PUT /api/users/profile` - Update authenticated user's profile.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly. Forbiden to update others profiles. The user can modify whatever he wants (name, last name or email). At the same time or separately.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">BODY</summary>

        {
          "firstName": "Pepe",
          "lastName": "Perez",
          "email": "pepe@pepe.com"
        }
        
    </details>

##### Appointments 📅

- `GET /api/appointments` - Retrieve user's appointments.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly. Forbiden to see other users appointments.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>

- `GET /api/appointments/{id}` - Retrieve details of a specific appointment.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to send the appointmentId in the endpoint.
    </details>
    <details>    
    <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>

- `PUT /api/appointments` - Update a appointment.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly. Forbiden to update other users appointments.
        Mandatory to know the appointmentId to modify.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">BODY</summary>

        {
          "appointmentIdToModify": 16,
          "newAppointmentDate": "2025-03-02",
          "newService": {
                  "id": 5
          }
        }

    </details>
</details>


<details>
<summary style="font-weight: bold; font-size: 1.3em;">Admin endpoints</summary>

##### Users 👩‍💼👨‍💼

- `GET /api/users` - List all users.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly and be admin or super-admin.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>

- `GET /api/users/profile` - Retrieve a user profile.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly and be admin or super-admin.
        Mandatory to send the appointmentId in the endpoint.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>
       
- `PUT /api/users/:id/role` - Update user role.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly and be admin or super-admin.
        Mandatory to send the userId in the endpoint.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">BODY</summary>

      {
        "role": "2"
      } 

- `DELETE /api/users/{id}` - Delete a user by ID.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly and be admin or super-admin.
        Mandatory to send the appointmentId in the endpoint.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>


##### Appointments 📅

- `POST /api/appointments` - Create a new appointment.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly and be admin or super-admin.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">BODY</summary>

    {
      "appointmentDate": "2024-03-03",
      "user": {
              "id": 5
              },
      "service": {
              "id": 3
      }
    }
        
    </details>

- `PUT /api/appointments` - Update a appointment.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly and be admin or super-admin.
        Admin or super-admin modifycate any appointment
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">BODY</summary>

        {
          "appointmentIdToModify": 16,
          "newAppointmentDate": "2025-03-02",
          "newService": {
                  "id": 5
          }
        }

    </details>


##### Services 🎨

- `POST /api/services` - Create a new service.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly and be super-admin.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">BODY</summary>

        {
          "serviceName": "SERVICENAME",
          "description": "SERVICETEXT"
        }

    </details>
- `PUT /api/services/{id}` - Update a service by ID.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly and be super-admin.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">BODY</summary>

        {
          "serviceName": "SERVICENAME",
          "description": "SERVICETEXT"
        }
        
    </details>
- `DELETE /api/services/{id}` - Delete a service by ID.
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">Features</summary>
        Mandatory to be logged previusly and be super-admin.
    </details>
    <details>
      <summary style="font-weight: bold; font-size: 0.8em;">TOKEN</summary>
        Mandatory to send the token in the Bearer Authentication.
    </details>
</details>

***
## Next versions :soon:

- **Add a frontend** - So users can interact with the API from a web browser.
- **Add notifications** - So users know when their appointments are modified, created or deleted.
***
## Author :black_nib:
- **Fernando Elegido** - Full Stack Developer
  - [GitHub](https://github.com/ferelbue) - [LinkedIn](https://www.linkedin.com/in/ferelbue)
***

## Acknowledgements :mortar_board:

- Great appreciation to **Geekshubs Academy** for the opportunity to learn and grow as a developer.

***

[Top of document](#tattoo-studio-api-black_nib)