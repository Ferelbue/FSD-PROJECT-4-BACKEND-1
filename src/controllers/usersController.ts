import { Request, Response } from "express"

// READ/GET
export const getUsers = (req: Request,res: Response) => {

    
    res.status(200).json(
        {
            success: true,
            message: "Roles retrieve succesfully"
        })
}

//CREATED/POST
export const createUsers = (req: Request,res: Response) => {


    res.status(201).json(
        {
            success: true,
            message: "Roles created succesfully"
        })
}

//UPDATE/PUT/PACH
export const updateUsers = (req: Request,res: Response) => {


    res.status(200).json(
        {
            success: true,
            message: "Roles updated succesfully"
        })
}

//DELETE
export const deleteUsers = (req: Request,res: Response) => {


    res.status(200).json(
        {
            success: true,
            message: "Roles deleted succesfully"
        })
}