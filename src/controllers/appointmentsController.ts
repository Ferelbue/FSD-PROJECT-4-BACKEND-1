import { Request, Response } from "express"

// READ/GET
export const getAppointments = (req: Request,res: Response) => {

    
    res.status(200).json(
        {
            success: true,
            message: "Roles retrieve succesfully"
        })
}

//CREATED/POST
export const createAppointments = (req: Request,res: Response) => {


    res.status(201).json(
        {
            success: true,
            message: "Roles created succesfully"
        })
}

//UPDATE/PUT/PACH
export const updateAppointments = (req: Request,res: Response) => {


    res.status(200).json(
        {
            success: true,
            message: "Roles updated succesfully"
        })
}

//DELETE
export const deleteAppointments = (req: Request,res: Response) => {


    res.status(200).json(
        {
            success: true,
            message: "Roles deleted succesfully"
        })
}