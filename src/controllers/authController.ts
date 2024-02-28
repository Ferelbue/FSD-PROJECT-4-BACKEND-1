import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";

// CREATE USERS
export const register = async (req: Request, res: Response) => {

    try {

        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const passwordHash = req.body.password;
        const roleId = req.body.roleId;
        // const { email, password } = req.body

        //validacion password
        if (passwordHash.length < 6 || passwordHash.length > 10) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password, min 6 max 10 characters"
            })

        }

        //validacion email
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }

        // tratamos la data si fuese necesario 
        const passwordEncrypted = bcrypt.hashSync(passwordHash, 8)
        //comprobamos que se genera la contraseña encryptada
        console.log(passwordEncrypted)
        // introducimos en base de datos
        const newUser = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            passwordHash: passwordEncrypted,
            role: {
                id: roleId
            }
            //roleID:2  //dos opciones de meter el rol, dependiendo de si usamos @column @joincolumn
        }).save()




        res.status(201).json(
            {
                success: false,
                message: "User registered successfully"
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be created",
            error: error
        })
    }
}

// CREATE LOGIN
export const login = async (req: Request, res: Response) => {

    // try {
    //     const email = req.body.email;
    //     const passwordHash = req.body.password;

        

    //     const getUserByEmail = async (req: Request, res: Response) => {
    //         try {
    //             const userEmail = req.body.email;

    //             const user = await User.findOneBy(
    //                 {
    //                     email: email
    //                 }
    //             )

    //             if (!user) {
    //                 return res.status(404).json({
    //                     success: false,
    //                     message: "User not found",

    //                 })

    //             }

    //             res.status(200).json(
    //                 {
    //                     success: true,
    //                     message: "User retrieved successfully",
    //                     data: user
    //                 }
    //             )
    //         } catch (error) {
    //             res.status(500).json({
    //                 success: false,
    //                 message: "User cant be retrieved",
    //                 error: error
    //             })
    //         }
    //         app.get('/api/user/', getUserByEmail);
    //         //validacion password
    //         if (passwordHash.length < 6 || passwordHash.length > 10) {
    //             return res.status(400).json({
    //                 success: false,
    //                 message: "Incorrect password, min 6 max 10 characters"
    //             })

    //         }

    //         //validacion email

    //         if (bcrypt.compare(passwordHash,)) {
    //             return res.status(400).json(
    //                 {
    //                     success: false,
    //                     message: "format email invalid"
    //                 }
    //             )
    //         }

    //         // tratamos la data si fuese necesario 
    //         const passwordEncrypted = bcrypt.hashSync(passwordHash, 8)
    //         //comprobamos que se genera la contraseña encryptada
    //         console.log(passwordEncrypted)

    //         const newUser = await User.create({
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email,
    //             passwordHash: passwordEncrypted,
    //             role: {
    //                 id: roleId
    //             }
    //             //roleID:2  //dos opciones de meter el rol, dependiendo de si usamos @column @joincolumn
    //         }).save()




    //         res.status(201).json(
    //             {
    //                 success: false,
    //                 message: "User registered successfully"
    //             }
    //         )

    //     } catch (error) {
    //         res.status(500).json({
    //             success: false,
    //             message: "User cant be created",
    //             error: error
    //         })
    //     }
    }
