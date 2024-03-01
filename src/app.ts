
import express from "express";
import { deleteUser, getUserByEmail, getUserProfile, getUsers, updateUserProfile, updateUserRole } from "./controllers/userController";
import { createAppointment, getAllAppointment, getAppointment, updateAppointment } from "./controllers/appointmentController";
import { createService, deleteService, getServices, updateService } from "./controllers/serviceController";
import { login, register } from "./controllers/authController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";
import { isAdmin } from "./middlewares/isAdmin";

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
app.post('/api/auth/register', register) // DONE
app.post('/api/auth/login', login) // DONE


// USERS RUTES
app.get('/api/users', auth, isAdmin, getUsers) // DONE
app.get('/api/users/profile',auth, getUserProfile) // DONE
/*X*/app.get('/api/users', getUserByEmail) // 
app.put('/api/users/profile', auth, updateUserProfile) // DONE
/*X*/app.put('/api/users/:id/role ', updateUserRole)
/*X*/app.delete('/api/users/:id', deleteUser) // Done

// APPOINTMENTS RUTES
app.get('/api/appointments/:id', auth, isAdmin, getAppointment) // Inprogress me falta los id´s
app.get('/api/appointments', auth, getAllAppointment) // DONE
app.post('/api/appointments', auth, isAdmin, createAppointment) // DONE
app.put('/api/appointments', auth, isSuperAdmin, updateAppointment) // Done

// SERVICES RUTES
app.get('/api/services', getServices) //Done
/*X*/app.post('/api/services', createService) //Done
/*X*/app.put('/api/services/:id', updateService) //Done
/*X*/app.delete('/api/services/:id', deleteService) //Done
