import { Request, Response } from "express"
import { Service } from "../models/Service"

//GET SERVICE
export const getServices = async (req: Request, res: Response) => {
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
        const newUser = await Service.create({
            name: name
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

//CREATE SERVICE
export const createService = async (req: Request, res: Response) => {
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
        const newUser = await Service.create({
            name: name
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

//MODIFY SERVICE
export const updateService = async (req: Request, res: Response) => {
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
        const newUser = await Service.create({
            name: name
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

//DELETE SERVICE
export const deleteService = async (req: Request, res: Response) => {
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
        const newUser = await Service.create({
            name: name
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

