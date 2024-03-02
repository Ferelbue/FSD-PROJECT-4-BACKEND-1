import { Request, Response } from "express"
import { User } from "../models/User"
import { FindOperator, Like } from "typeorm"


//GET ALL USERS
export const getUsers = async (req: Request, res: Response) => {
    try {
        //CONSULTA DB
        const users = await User.find(
            {
                relations: {
                    role: true,
                },
                select: {
                    firstName: true,
                    lastName: true,
                    email: true,
                    role: {
                        name: true
                    }
                },
            }
        )

        // RESPUESTA
        res.status(200).json(
            {
                success: true,
                message: "Users retrieved successfully",
                data: users
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Users cant be retrieved",
            error: error
        })
    }
}

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
export const getUserByEmail = async (req: Request, res: Response) => {

    try {
        //RECUPERAR DATOS DE LA BUSQUEDA
        //Crear interface con el parametro de busqueda email que es de tipo FindOperator<string>
        interface queryFilters {
            email?: FindOperator<string>,
        }
        // Se declara la constante queryFiters de tipo queryFilters
        const queryFilters: queryFilters = {}

        if (req.query.email) {
            queryFilters.email = Like("%" + req.query.email.toString() + "%");
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
                }
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
        const name = req.body.name
        const userId = req.tokenData.userId

        const user = await User.findOneBy(
            {
                id: userId
            }
        )

        //VALIDAR
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",

            })

        }

        if (name.length > 50) {

            return res.status(400).json({
                succes: false,
                message: "Role name too large"
            })
        }
        if (!name) {

            return res.status(400).json({
                succes: false,
                message: "Name can't be empty"
            })
        }

        // Actualizar datos
        const userUpdated = await User.update(
            {
                id: userId
            },
            {
                firstName: name
            }
        )

        //Response
        res.status(200).json(
            {
                success: true,
                message: "User updated succesfully"
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

        //Response
        res.status(200).json(
            {
                success: true,
                message: "User role updated succesfully",
                data: userUpdated
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
                message: "User not found"
            })
        }

        // ACTUALIZAR EN BD
        const userDeleted = await User.remove(user)

        // RESPONDER
        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: userDeleted
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be deleted",
            error: error
        })
    }
}
