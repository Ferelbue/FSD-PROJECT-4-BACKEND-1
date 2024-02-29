import { Request, Response } from "express"
import { User } from "../models/User"


//GET ALL USERS
export const getUsers = async (req: Request, res: Response) => {
    try {
        //Consultar en base de datos
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


        // console.log(users.role.id)
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
                    role: {
                        name: true,
                    }
                }
            }
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",

            })

        }

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
        const userEmail = req.params.email;

        const user = await User.findOneBy(
            {
                email: userEmail
            }
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",

            })

        }

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


//MODIFY USER PROFILE
export const updateUserProfile = async (req: Request, res: Response) => {
    try {
        //Recuperar parametros de la ruta
        const name = req.body.name
        const userId = req.tokenData.userId


        //Validar datos
        const user = await User.findOneBy(
            {
                id: userId
            }
        )
            console.log(user)
            console.log(name)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",

            })

        }

        //Validacion
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

        // Tratar datos


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
        const name = req.params.id


        //Validacion
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

        //Guardar datos en BD
        const newUser = await User.create({
            firstName: name
        }).save();

        //Response
        res.status(200).json(
            {
                success: true,
                message: "Roles updated succesfully"
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
        const userId = req.params.id

        const user = await User.findOneBy({
            id: parseInt(userId)
        })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const userDeleted = await User.remove(user)

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
