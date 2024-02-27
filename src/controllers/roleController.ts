import { Request, Response } from "express"
import { Role } from "../models/Role"

// READ/GET
export const getRoles = (req: Request, res: Response) => {

    res.status(200).json(
        {
            success: true,
            message: "Roles retrieve succesfully"
        })
}

//CREATED/POST
export const createRoles = async (req: Request, res: Response) => {
    
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
        if (!name){
            return res.status(400).json({
                succes: false,
                message: "Name can't be empty"
            })
        }

        //Guardar datos en BD
        const newRole = await Role.create({
            name: name
        }).save();

        //Response
        res.status(201).json(
            {
                success: true,
                message: "Role created succesfully",
                data: newRole
            })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Can't create rol",
            error: error
        })
    }
}

//UPDATE/PUT/PACH
export const updateRoles = (req: Request, res: Response) => {

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
export const deleteRoles = (req: Request, res: Response) => {

    console.log(req.body.id)

    res.status(200).json(
        {
            success: true,
            message: "Roles deleted succesfully"
        })
}