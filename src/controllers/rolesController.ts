import { Request, Response } from "express"

// READ/GET
export const getRoles = (req: Request,res: Response) => {

    
    res.status(200).json(
        {
            success: true,
            message: "Roles retrieve succesfully"
        })
}

//CREATED/POST
export const createRoles = (req: Request,res: Response) => {


    res.status(201).json(
        {
            success: true,
            message: "Roles created succesfully"
        })
}

//UPDATE/PUT/PACH
export const updateRoles = (req: Request,res: Response) => {


    res.status(200).json(
        {
            success: true,
            message: "Roles updated succesfully"
        })
}

//DELETE
export const deleteRoles = (req: Request,res: Response) => {


    res.status(200).json(
        {
            success: true,
            message: "Roles deleted succesfully"
        })
}