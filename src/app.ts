
import express from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { deleteUser, getUserByEmail, getUserProfile, getUsers, updateUserProfile, updateUserRole } from "./controllers/userController";
import { createAppointment, getAllAppointment, getAppointment, updateAppointment } from "./controllers/appointmentController";
import { createService, deleteService, getServices, updateService } from "./controllers/serviceController";

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

// USERS RUTES
app.get('/api/users', getUsers)
app.get('/api/users/profile', getUserProfile)
app.get('/api/users/profile', getUserByEmail)
app.put('/api/users/profile', updateUserProfile)
app.put('/api/users/{id}/role ', updateUserRole)
app.delete('/api/users/{id}', deleteUser)

// APPOINTMENTS RUTES
app.get('/api/appointments/{id}', getAppointment)
app.get('/api/appointments', getAllAppointment)
app.post('/api/appointments', createAppointment)
app.put('/api/appointments', updateAppointment)

// SERVICES RUTES
app.get('/api/services', getServices)
app.post('/api/services', createService)
app.put('/api/services/{id}', updateService)
app.delete('/api/services/{id}', deleteService)

