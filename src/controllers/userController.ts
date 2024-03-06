import { Request, Response } from "express"
import { User } from "../models/User"
import { FindOperator, Like } from "typeorm"
import bcrypt from "bcrypt";


//GET USER PROFILE
export const getUserProfile = async (req: Request, res: Response) => {

    try {
        //RECUPERAR DATOS
        const userId = req.tokenData.userId

        //CONSULTA
        const user = await User.findOne(
            {
                where: {
                    id: userId
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    firstName: true,
                    email: true,
                    role: {
                        name: true,
                    }
                }
            }
        )

        // VALIDAR DATOS
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",

            })

        }
        // RESPUESTA
        res.status(200).json(
            {
                success: true,
                message: "User retrieved successfully",
                data: user
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be retrieved",
            error: error
        })
    }
}

//GET USER PROFILE
export const getUsers = async (req: Request, res: Response) => {

    try {
        const limit = Number(req.query.limit) || 10;
        const page = Number(req.query.page) || 1;
        const skip = (page - 1) * limit;
        //RECUPERAR DATOS DE LA BUSQUEDA
        //Crear interface con el parametro de busqueda email que es de tipo FindOperator<string>
        interface queryFilters {
            email?: FindOperator<string>,
            firstName?: FindOperator<string>,
            lastName?: FindOperator<string>
        }
        // Se declara la constante queryFiters de tipo queryFilters
        const queryFilters: queryFilters = {}

        if (req.query.email) {
            queryFilters.email = Like("%" + req.query.email.toString() + "%");
        }
        if (req.query.firstName) {
            queryFilters.firstName = Like("%" + req.query.firstName.toString() + "%");
        }
        if (req.query.lastName) {
            queryFilters.lastName = Like("%" + req.query.lastName.toString() + "%");
        }

        //CONSULTA. Busqueda con los parametros de la query
        const user = await User.find(
            {
                where: queryFilters,
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    firstName: true,
                    email: true,
                    role: {
                        name: true,
                    }
                },
                take: limit,
                skip: skip
            }
        )

        // VALIDACION
        if (user.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Email not found",

            })
        }

        // RESPUESTA
        res.status(200).json(
            {
                success: true,
                message: "Email retrieved successfully",
                data: user
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Email cant be retrieved",
            error: error
        })
    }
}

//MODIFY USER PROFILE
export const updateUserProfile = async (req: Request, res: Response) => {
    try {
        //RECUPERAR DATOS
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        let email = req.body.email
        let password = req.body.password
        let newPassword = req.body.newPassword
        const userId = req.tokenData.userId

        const user = await User.findOne(
            {
                where: {
                    id: userId
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    firstName: true,
                    email: true,
                    passwordHash: true,
                    role: {
                        name: true,
                    }
                }
            }
        )

        //VALIDAR
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",

            })

        }

        if (!firstName && !lastName && !email && !password) {

            return res.status(400).json({
                succes: false,
                message: "Data can't be empty"
            })
        }

        if (!firstName) {
            firstName = user?.firstName
        }

        if (!password) {
            password = user?.passwordHash
        }

        if (!lastName) {
            lastName = user?.lastName
        }
        let flag = false;
        if (!email) {
            email = user?.email
            flag = true;
        }

        if (firstName?.length > 50) {

            return res.status(400).json({
                succes: false,
                message: "First name too large"
            })
        }

        if (lastName?.length > 50) {

            return res.status(400).json({
                succes: false,
                message: "Last name too large"
            })
        }
        //validacion email
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Email format invalid"
                }
            )
        }

        const exist = await User.findOne(
            {
                where: {
                    email: email,
                }
            }
        )

        if (exist && !flag) {
            return res.status(406).json({
                success: false,
                message: "Email already registered"
            })
        }


        //validacion password
        if (newPassword.length < 6 || newPassword.length > 10) {
            return res.status(401).json({
                success: false,
                message: "Incorrect new password, min 6 max 10 characters"
            })

        }


        if (newPassword) {

            const passwordEqual = bcrypt.compareSync(password, user.passwordHash)

            if ((newPassword.length > 0) && (passwordEqual == true)) {

                const newPasswordEncrypted = bcrypt.hashSync(newPassword, 8)
                password = newPasswordEncrypted;

            } else {
                return res.status(200).json(
                    {
                        success: true,
                        message: "Old password incorrect"
                    })

            }
        }


        // Actualizar datos en la
        const userUpdated = await User.update(
            {
                id: userId
            },
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                passwordHash: password,
            }
        )

        //Recuper los datos para mostrarlos en la respuesta
        const user2 = await User.findOne(
            {
                where: {
                    id: userId
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    firstName: true,
                    email: true,
                    passwordHash: true,
                    role: {
                        name: true,
                    }
                }
            }
        )
            console.log(1)

            // const{passwordHash,...rest} = user2


        //Response
        return res.status(200).json(
            {
                success: true,
                message: "User updated succesfully",
                data: user2
            })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Can't update user",
            error: error
        })
    }
}

//MODIFY USER ROLE
export const updateUserRole = async (req: Request, res: Response) => {
    try {
        //Recuperar parametros de la ruta
        const role = req.body.role
        const userId = req.params.id


        // Validacion
        if (role != "1" && role != "2" && role != "3") {
            return res.status(400).json({
                succes: false,
                message: "Incorrect role"
            })
        }


        // Actualizar datos
        const userUpdated = await User.update(
            {
                id: parseInt(userId)
            },
            {
                role: role
            }
        )

        //Recuper los datos para mostrarlos en la respuesta
        const user = await User.findOne(
            {
                where: {
                    id: parseInt(userId)
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    firstName: true,
                    email: true,
                    passwordHash: true,
                    role: {
                        name: true,
                    }
                }
            }
        )

        //Response
        res.status(200).json(
            {
                success: true,
                message: "User role updated succesfully",
                data: user
            })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Can't create rol",
            error: error
        })
    }
}

//DELETE USER
export const deleteUser = async (req: Request, res: Response) => {
    try {
        // RECUPERAR DATOS
        const userId = req.params.id

        const user = await User.findOneBy({
            id: parseInt(userId)
        })

        // VALIDACION
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "USER NOT FOUND"
            })
        }

        // ACTUALIZAR EN BD
        const userDeleted = await User.remove(user)

        // RESPONDER
        return res.status(200).json({
            success: true,
            message: "USER DELETED SUCCESSFULLY",
            data: userDeleted
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "USER CAN'T BE DELETED",
            error: error
        })
    }
}
