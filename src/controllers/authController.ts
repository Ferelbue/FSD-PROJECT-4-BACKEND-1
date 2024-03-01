import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";
import jwt from "jsonwebtoken";

// CREATE USERS
export const register = async (req: Request, res: Response) => {

    try {
        //Recuperar datos
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const passwordHash = req.body.password;
        const roleId = req.body.roleId;

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

        // Guardar en BD
        const newUser = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            passwordHash: passwordEncrypted,
            role: {
                id: roleId
            }
        }).save()

        // Responder
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

    try {

        //Recuperar la info
        const email = req.body.email;
        const password = req.body.password;

        //Validadicon de email y password
        if (!email || !password) {
            console.log(2)
            return res.status(400).json({
                success: false,
                message: "Email and password are needed"

            })
        }

        // Validar formato email
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }

        // Tratar datos
        // buscar usuario en BD
        const user = await User.findOne(
            {
                where: {
                    email: email,
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    passwordHash: true,
                    email: true,
                    role: {
                        id: true,
                        name: true,
                    }
                }
            }
        )

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Email or password invalid",
            })
        }

        // Comparo contraseñas
        const invalidPassword = bcrypt.compareSync(password, user.passwordHash)

        if (!invalidPassword) {
            return res.status(401).json({
                success: false,
                message: "Email or password invalid",
            })
        }

        //CREATE TOKEN
        const token = jwt.sign(
            {
                userId: user.id,
                roleName: user.role.name
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "2h"
            }
        )

        // responder
        res.status(200).json({
            success: true,
            message: "User logged",
            data: user,
            token: token
        })

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "User cant be logged",
            error: error
        })
    }
}

