import { faker } from '@faker-js/faker';
import { Usero } from "../../models/Usero";
import { AppDataSource } from "../db";

export const userSeedDatabase = async () => {
    try {
        await AppDataSource.initialize();

        const user = Usero.create({
            firstName: "user",
            lastName: "user",
            email: "user@user.com",
            image: faker.image.urlLoremFlickr({ category: 'people' }),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user.save();

        const user2 = Usero.create({
            firstName: "admin",
            lastName: "admin",
            email: "admin@admin.com",
            image: faker.image.urlLoremFlickr({ category: 'people' }),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 2 }
        })
        await user2.save();

        const user3 = Usero.create({
            firstName: "superAdmin",
            lastName: "superAdmin",
            email: "superAdmin@superAdmin.com",
            image: faker.image.urlLoremFlickr({ category: 'people' }),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 3 }
        })
        await user3.save();

        const user4 = Usero.create({
            firstName: "Fernando",
            lastName: "Elegido",
            email: "fernando@fernando.com",
            image: faker.image.urlLoremFlickr({ category: 'people' }),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 3 }
        })
        await user4.save();

        const user5 = Usero.create({
            firstName: "Marta",
            lastName: "Santes",
            email: "marta@marta.com",
            image: faker.image.urlLoremFlickr({ category: 'people' }),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 2 }
        })
        await user5.save();

        const user6 = Usero.create({
            firstName: "Lola",
            lastName: "Eletes",
            email: "lola@lola.com",
            image: faker.image.urlLoremFlickr({ category: 'people' }),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user6.save();

        const user7 = Usero.create({
            firstName: "Ruben",
            lastName: "Gomez",
            email: "ruben@ruben.com",
            image: faker.image.urlLoremFlickr({ category: 'people' }),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user7.save();

        const user8 = Usero.create({
            firstName: "David",
            lastName: "Martinez",
            email: "david@david.com",
            image: faker.image.urlLoremFlickr({ category: 'people' }),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user8.save();

        const user9 = Usero.create({
            firstName: "Pepa",
            lastName: "Perez",
            email: "pepa@pepa.com",
            image: faker.image.urlLoremFlickr({ category: 'people' }),
            passwordHash: "$2b$08$lV2.D7/ibyEeWGbaJibeb.FknmnrSlcfpsYfNqbgZJJ0pKolyvObG",
            role: { id: 1 }
        })
        await user9.save();

        const user10 = Usero.create({
            firstName: "Pepe",
            lastName: "Perez",
            email: "pepe@pepe.com",
            image: faker.image.urlLoremFlickr({ category: 'people' }),
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



