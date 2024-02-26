import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708955321316 } from "./database/migrations/1708955321316-roles"
import { Users1708977117422 } from "./database/migrations/1708977117422-users"
import { Services1708977714733 } from "./database/migrations/1708977714733-services"
import { Appointments1708978286596 } from "./database/migrations/1708978286596-appointments"



export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3307,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_DATABASE || "test",
    entities: [],
    migrations: [Roles1708955321316,Users1708977117422,Services1708977714733,Appointments1708978286596],
    synchronize: false,
    logging: false,
})
