import { Request, Response } from "express"
import { Appointment } from "../models/Appointment"


//GET ONE USER APPOINTMENT
export const getAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.id;

        const appointment = await Appointment.findOneBy(
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

//GET ALL USER APPOINTMENT
export const getAllAppointment = async (req: Request, res: Response) => {
    try {
        //Consultar en base de datos
        const appointments = await Appointment.find(
            {
                select: {
                    id: true,
                    appointmentDate: true,
                    user: {
                        id: true,
                    },
                    service: {
                        id: true,
                    }
                }
            }

        )
        console.log("hola")

        res.status(200).json(
            {
                success: true,
                message: "Users retrieved successfully",
                data: appointments
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

// CREATE APPOINTMENT
export const createAppointment = async (req: Request, res: Response) => {
    try {

        const appointmentDate = req.body.appointmentDate;
        const userId = req.body.user.id;
        const serviceId = req.body.service.id;

        const newAppointment = await Appointment.create({
            appointmentDate: appointmentDate,
            user: {
                id: userId
            },
            service: {
                id: serviceId
            }
        }).save()
        console.log("hola")
        res.status(201).json(
            {
                success: false,
                message: "Appointment registered successfully"
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Appointment cant be created",
            error: error
        })
    }
}

//MODIFY APPOINTMENT
export const updateAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.id;
        const appointmentDate = req.body.appointmentDate;
        const userId = req.body.user.id;
        const serviceId = req.body.service.id;

        // //Validar datos
        // const user = await Appointment.findOneBy(
        //     {
        //         id: parseInt(userId)
        //     }
        // )

        // if (!user) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "User not found",

        //     })

        // }

        // Tratar datos



        // Actualizar datos
        const appointmentUpdated = await Appointment.update(
            {
                id: parseInt(appointmentId)
            },
            {
                 appointmentDate: appointmentDate,
                 user: {id: userId},
                 service: {id: serviceId}

            }
        )




        // Responder
        res.status(200).json(
            {
                success: true,
                message: "Appointment updated successfully",
                data: appointmentUpdated
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Appointment cant be update",
            error: error
        })
    }
}
