import { Request, Response } from "express"
import { User } from "../models/User"

//GET ALL USERS
export const getUsers = async (req: Request, res: Response) => {
    try {
        //Consultar en base de datos
        const users = await User.find(
            {
                select: {
                    firstName: true,
                    lastName: true,
                    email: true,
                    role: {id: true}                    
                }
            }
        )
        console.log(users.role.id)
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
        const appointmentId = req.params.id;

        const appointment = await User.findOneBy(
            {
                id: parseInt(appointmentId)
            }
        )

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",

            })

        }

        res.status(200).json(
            {
                success: true,
                message: "Appointment retrieved successfully",
                data: appointment
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Appointment cant be retrieved",
            error: error
        })
    }

}
//GET USER PROFILE
export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        // recuperar la info a traves del body
        const name = req.body.name

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
                message: "Roles retrieve succesfully"
            })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Can't create rol",
            error: error
        })
    }
}

//MODIFY USER PROFILE
export const updateUserProfile = async (req: Request, res: Response) => {
    try {
        //Recuperar parametros de la ruta
        const name = req.params.id
        console.log(req.params.id)

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

//MODIFY USER ROLE
export const updateUserRole = async (req: Request, res: Response) => {
    try {
        //Recuperar parametros de la ruta
        const name = req.params.id
        console.log(req.params.id)

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
        //Recuperar parametros de la ruta
        const name = req.body.id

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
        res.status(200).json(
            {
                success: true,
                message: "Roles deleted succesfully"
            })
    }
}

