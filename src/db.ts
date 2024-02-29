import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708955321316 } from "./database/migrations/1708955321316-roles"
import { Role } from "./models/Role"
import { User } from "./models/User"
import { Service } from "./models/Service"
import { Appointment } from "./models/Appointment"
import { Users1709246078708 } from "./database/migrations/1709246078708-users"
import { Services1709246156854 } from "./database/migrations/1709246156854-services"
import { Appointments1709246239165 } from "./database/migrations/1709246239165-appointments"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3309,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_DATABASE || "test",
    entities: [
        Role,
        User,
        Service,
        Appointment
    ],
    migrations: [
        Roles1708955321316,
        Users1709246078708,
        Services1709246156854,
        Appointments1709246239165
    ],
    synchronize: false,
    logging: false,
})
