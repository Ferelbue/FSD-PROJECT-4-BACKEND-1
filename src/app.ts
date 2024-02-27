
import express from "express";
import { 
    createRoles, 
    deleteRoles, 
    getRoles, 
    updateRoles } from "./controllers/rolesController";

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

// // ROLES RUTES
// app.get('/users', getUsers)
// app.post('/users', createUsers)
// app.put('/users/:id', updateUsers)
// app.delete('/users/:id', deleteUsers)

// // ROLES RUTES
// app.get('/services', getServices)
// app.post('/services', createServices)
// app.put('/services/:id', updateServices)
// app.delete('/services/:id', deleteServices)

// // ROLES RUTES
// app.get('/appointments', getAppointments)
// app.post('/appointments', createAppointments)
// app.put('/appointments/:id', updateAppointments)
// app.delete('/appointments/:id', deleteAppointments)