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

    // recuperar la info a traves del body
    console.log(req.body)

    res.status(201).json(
        {
            success: true,
            message: "Roles created succesfully"
        })
}

//UPDATE/PUT/PACH
export const updateRoles = (req: Request,res: Response) => {

    //Recuperar parametros de la ruta
    req.params.id
    console.log(req.params.id)


    res.status(200).json(
        {
            success: true,
            message: "Roles updated succesfully"
        })
}

//DELETE
export const deleteRoles = (req: Request,res: Response) => {

    console.log(req.body.id)

    res.status(200).json(
        {
            success: true,
            message: "Roles deleted succesfully"
        })
}