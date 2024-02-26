
import express from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";

export const app = express();

app.use(express.json());

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
app.put('/roles/:id', updateRoles)
app.delete('/roles/:id', deleteRoles)
