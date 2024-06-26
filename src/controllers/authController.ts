import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Usero } from "../models/Usero";
import jwt from "jsonwebtoken";

// CREATE USERS
export const register = async (req: Request, res: Response) => {


    try {
        //Recuperar datos
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const image= req.body.image;
        const email = req.body.email;
        const passwordHash = req.body.password;


        //validacion password
        if (passwordHash.length < 6 || passwordHash.length > 10) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password, min 6 max 10 characters"
            })

        }

        //validacion email
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(401).json(
                {
                    success: false,
                    message: "email format invalid"
                }
            )
        }

        const exist = await Usero.findOne(
            {
                where: {
                    email: email,
                }
            }
        )

        if (!exist) {
            // tratamos la data 
            const passwordEncrypted = bcrypt.hashSync(passwordHash, 8)

            // Guardar en BD
            const newUser = await Usero.create({
                firstName: firstName,
                lastName: lastName,
                image: image,
                email: email,
                passwordHash: passwordEncrypted
            })
                .save()

            const printUser = await Usero.findOne(
                {
                    where: {
                        email: email,
                    },
                    relations: {
                        role: true
                    },
                    select: {
                        id: true,
                        email: true,
                        image: true,
                        role: {
                            id: true,
                            name: true,
                        }
                    }
                }
            )

            // Responder
            return res.status(201).json(
                {
                    success: true,
                    message: "User registered successfully",
                    data: printUser
                }
            )
        }

        return res.status(406).json({
            success: false,
            message: "Email already registered"
        })

    } catch (error) {
        res.status(406).json({
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
            return res.status(401).json({
                success: false,
                message: "Email and password are needed"

            })
        }

        // Validar formato email
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(401).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }

        // Tratar datos
        // buscar usuario en BD
        const user = await Usero.findOne(
            {
                where: {
                    email: email,
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    firstName: true,
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
                roleName: user.role.name,
                userName: user.firstName
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "2h"
            }
        )

        // Mostrar datos
        const user2 = await Usero.findOne(
            {
                where: {
                    email: email,
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    email: true,
                    image: true,
                    role: {
                        name: true,
                    }
                }
            }
        )

        // responder
        res.status(202).json({
            success: true,
            message: "User logged",
            data: user2,
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

