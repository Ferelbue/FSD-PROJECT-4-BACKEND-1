import { Role } from "../../models/Role";
import { AppDataSource } from "../db";


const roleSeedDatabase = async () => {
    try {
        await AppDataSource.initialize();

        const roleUser = Role.create({
            name: "user"
        })
        await roleUser.save();

        const roleAdmin = Role.create({
            name: "admin"
        })
        await roleAdmin.save();

        const roleSuperAdmin = Role.create({
            name: "super-admin"
        })
        await roleSuperAdmin.save();

        console.log("---------------------------------------")
        console.log("++++++++++ ROLES CREADOS (3) ++++++++++")
        console.log("---------------------------------------")

    } catch (error) {
        console.log(error);

    } finally {
        await AppDataSource.destroy()
    }
}

roleSeedDatabase();