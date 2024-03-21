import { faker } from '@faker-js/faker';
import { User } from "../../models/User";
import { AppDataSource } from "../db";

export const userSeedDatabase = async () => {
    try {
        await AppDataSource.initialize();

        const user = User.create({
            firstName: "user",
            lastName: "user",
            email: "user@user.com",
            image: faker.image.avatar(),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user.save();

        const user2 = User.create({
            firstName: "admin",
            lastName: "admin",
            email: "admin@admin.com",
            image: faker.image.avatar(),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 2 }
        })
        await user2.save();

        const user3 = User.create({
            firstName: "superAdmin",
            lastName: "superAdmin",
            email: "superAdmin@superAdmin.com",
            image: faker.image.avatar(),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 3 }
        })
        await user3.save();

        const user4 = User.create({
            firstName: "Fernando",
            lastName: "Elegido",
            email: "fernando@fernando.com",
            image: faker.image.avatar(),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 3 }
        })
        await user4.save();

        const user5 = User.create({
            firstName: "Marta",
            lastName: "Santes",
            email: "marta@marta.com",
            image: faker.image.avatar(),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 2 }
        })
        await user5.save();

        const user6 = User.create({
            firstName: "Lola",
            lastName: "Eletes",
            email: "lola@lola.com",
            image: faker.image.avatar(),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user6.save();

        const user7 = User.create({
            firstName: "Ruben",
            lastName: "Gomez",
            email: "ruben@ruben.com",
            image: faker.image.avatar(),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user7.save();

        const user8 = User.create({
            firstName: "David",
            lastName: "Martinez",
            email: "david@david.com",
            image: faker.image.avatar(),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user8.save();

        const user9 = User.create({
            firstName: "Pepa",
            lastName: "Perez",
            email: "pepa@pepa.com",
            image: faker.image.avatar(),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user9.save();

        const user10 = User.create({
            firstName: "Pepe",
            lastName: "Perez",
            email: "pepe@pepe.com",
            image: faker.image.avatar(),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user10.save();

        console.log("---------------------------------------")
        console.log("++++++++ USUARIOS CREADOS (10) ++++++++")
        console.log("---------------------------------------")

    } catch (error) {
        console.log(error);

    } finally {
        await AppDataSource.destroy()
    }
}



