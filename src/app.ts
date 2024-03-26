
import express from "express";
import cors from "cors";
import { deleteUser,getUserByID,getUserProfile, getUsers, updateUserProfile, updateUserProfileById, updateUserRole } from "./controllers/userController";
import { createAppointment, deleteAppointment, getAllAppointment, getAppointment, updateAppointment } from "./controllers/appointmentController";
import { createService, deleteService, getServiceByID, getServices, updateService } from "./controllers/serviceController";
import { login, register } from "./controllers/authController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";
import { isAdmin } from "./middlewares/isAdmin";
// import router from "./routes/authRoutes"

export const app = express();

app.use(cors());

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
app.get('/api/users', auth, getUsers)
app.get('/api/users/profile', auth, getUserProfile) 
app.put('/api/users/profile', auth, updateUserProfile) 
app.put('/api/users/profile/:id', auth, updateUserProfileById) 
app.put('/api/users/:id/role', auth, isSuperAdmin, updateUserRole)
app.delete('/api/users/:id', auth, deleteUser)
app.get('/api/user/:id', auth, getUserByID)

// APPOINTMENTS RUTES 
app.get('/api/appointments', auth, getAllAppointment) 
app.get('/api/appointments/:id', auth, getAppointment) 
app.post('/api/appointments', auth, createAppointment) 
app.put('/api/appointments', auth, updateAppointment) 
app.delete('/api/appointments/:id', auth, deleteAppointment) 


// SERVICES RUTES
app.get('/api/services', getServices) 
app.get('/api/services/:id', auth, isSuperAdmin, getServiceByID) 
app.post('/api/services', auth, isSuperAdmin, createService)
app.put('/api/services/:id', auth, isSuperAdmin, updateService)
app.delete('/api/services/:id', auth, isSuperAdmin, deleteService)

