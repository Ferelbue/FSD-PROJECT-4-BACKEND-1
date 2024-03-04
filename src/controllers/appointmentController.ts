import { Request, Response } from "express"
import { Appointment } from "../models/Appointment"


//GET ONE USER APPOINTMENT
export const getAppointment = async (req: Request, res: Response) => {
    
    try {
        //RECUPERAR DATOS
        const appointmentId = req.params.id
        const userId = req.tokenData.userId
        const roleName = req.tokenData.roleName

        //Consultar y recuperar de la DB
        const appointments = await Appointment.findOne(
            {
                where: {
                    id: parseInt(appointmentId)
                },
                relations: {
                    user: true,
                    service: true
                },
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

        // VALIDAR
        if (!appointments) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",

            })
        }

        if((userId !== appointments.user.id) && ((roleName !== "super-admin")&&(roleName !== "admin"))){
            return res.status(404).json({
                success: false,
                message: "Can't retrieve someone else appointment",
            })
        }



        // RESPONDER
        res.status(200).json(
            {
                success: true,
                message: "Appointment retrieved successfully",
                data: appointments
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
        // Recuperar datos
        const userId = req.tokenData.userId

        //Consultar y recuperar en la DB
        const appointments = await Appointment.find(
            {
                where: {
                    user: { id: userId }
                },
                relations: {
                    user: true
                },
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

        // Responder
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
        // Recuperar datos
        const appointmentDate = req.body.appointmentDate;
        const userId = req.body.user.id;
        const serviceId = req.body.service.id;

        // VALIDAR DATOS
        const regexDate = /^\d{4}-\d{2}-\d{2}$/;
        const dateOk = regexDate.test(appointmentDate);

        if(dateOk === false){
            return res.status(404).json({
                success: false,
                message: "Incorrect Date (YYYY-MM-DD)",
            })
        }

        //Guardar en DB
        const newAppointment = await Appointment.create({
            appointmentDate: appointmentDate,
            user: {
                id: userId
            },
            service: {
                id: serviceId
            }
        }).save()

        //Responder
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
        // Recuperar datos
        const userId = req.tokenData.userId
        const roleName = req.tokenData.roleName
        const appointmentDate = req.body.newAppointmentDate;
        const serviceId = req.body.newService.id;
        const appointmentId = req.body.appointmentIdToModify;

        // VALIDAR DATOS
        const regexDate = /^\d{4}-\d{2}-\d{2}$/;
        const dateOk = regexDate.test(appointmentDate);
     
        if(dateOk === false){
            return res.status(404).json({
                success: false,
                message: "Incorrect Date (YYYY-MM-DD)",
            })
        }

        //Consultar y recuperar
        const appointment = await Appointment.findOne(
            {
                where: {
                    id: appointmentId
                },
                relations: {
                    user: true,
                    service: true
                },
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

        if((appointment!.user.id !== userId)&&(roleName === "user")){
            return res.status(404).json({
                success: false,
                message: "Can't modify someone else appointment",
            })

        }


        // Actualizar datos
        const appointmentUpdated = await Appointment.update(
            {
                id: parseInt(appointmentId),
                user: {id: appointment?.user.id},
            },
            {
                appointmentDate: appointmentDate,
                user: { id: appointment?.user.id },
                service: { id: serviceId }

            }
        )

        //Consultar y recuperar
        const user = await Appointment.findOne(
            {
                where: {
                    id: parseInt(appointmentId),
                    user: {id: appointment?.user.id},
                },
                relations: {
                    user: true
                },
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

        
        // Responder
        res.status(200).json(
            {
                success: true,
                message: "Appointment updated successfully",
                data: user
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
