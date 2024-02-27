import { Request, Response } from "express"

// READ/GET
export const getServices = (req: Request, res: Response) => {


    res.status(200).json(
        {
            success: true,
            message: "Roles retrieve succesfully"
        })
}

//CREATED/POST
export const createServices = (req: Request, res: Response) => {


    res.status(201).json(
        {
            success: true,
            message: "Roles created succesfully"
        })
}

//UPDATE/PUT/PACH
export const updateServices = (req: Request, res: Response) => {


    res.status(200).json(
        {
            success: true,
            message: "Roles updated succesfully"
        })
}

//DELETE
export const deleteServices = (req: Request, res: Response) => {


    res.status(200).json(
        {
            success: true,
            message: "Roles deleted succesfully"
        })
}