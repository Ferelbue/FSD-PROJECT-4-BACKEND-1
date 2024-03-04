
import express from "express";
import { deleteUser,getUserProfile, getUsers, updateUserProfile, updateUserRole } from "./controllers/userController";
import { createAppointment, getAllAppointment, getAppointment, updateAppointment } from "./controllers/appointmentController";
import { createService, deleteService, getServices, updateService } from "./controllers/serviceController";
import { login, register } from "./controllers/authController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";
import { isAdmin } from "./middlewares/isAdmin";
// import router from "./routes/authRoutes"

export const app = express();

app.use(express.json());

app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: "Server is healthy"
        })
})

// AUTH ROUTES
app.post('/api/auth/register', register) 
app.post('/api/auth/login', login) 
// app.use('/',router)

// USERS RUTES
app.get('/api/users', auth, isSuperAdmin, getUsers)
app.get('/api/users/profile', auth, getUserProfile) 
app.put('/api/users/profile', auth, updateUserProfile) 
app.put('/api/users/:id/role', auth, isSuperAdmin, updateUserRole)
app.delete('/api/users/:id', auth, isSuperAdmin, deleteUser)

// APPOINTMENTS RUTES 
app.get('/api/appointments', auth, getAllAppointment) 
app.get('/api/appointments/:id', auth, getAppointment) 
app.post('/api/appointments', auth, isAdmin, createAppointment) 
app.put('/api/appointments', auth, updateAppointment) 


// SERVICES RUTES
app.get('/api/services', getServices) 
app.post('/api/services', auth, isSuperAdmin, createService)
app.put('/api/services/:id', auth, isSuperAdmin, updateService)
app.delete('/api/services/:id', auth, isSuperAdmin, deleteService)
