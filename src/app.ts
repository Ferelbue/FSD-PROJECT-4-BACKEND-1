
import express from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "../controllers/roleController";

export const app = express();

   

//parsear el texto plano recibido a JSON
app.use(express.json());


//Comprueba si el servidor esta activado
app.get('/healthy', (req,res) => {
    res.status(200).json(
    {
        success: true,
        message: "Server is healthy"
    })
})


// ROLES RUTES
app.get('/roles', getRoles)
app.post('/roles', createRoles)
app.put('/roles/:id', updateRoles) // los dos puntos indican que lo que pongas a continuacion es dinamico
app.delete('/roles/:id', deleteRoles)
