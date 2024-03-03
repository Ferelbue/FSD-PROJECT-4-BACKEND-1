
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
app.post('/api/auth/register', register) // DONE DONE
app.post('/api/auth/login', login) // DONE DONE


// USERS RUTES
/*X*/app.get('/api/users', auth, isSuperAdmin, getUserByEmail) // DONE
app.get('/api/users', auth, isSuperAdmin, getUsers) // DONE
app.get('/api/users/profile', auth, getUserProfile) // DONE
app.put('/api/users/profile', auth, updateUserProfile) // DONE puede modificar su nombre, apellido y email.
/*X*/app.put('/api/users/:id/role', auth, isSuperAdmin, updateUserRole) // DONE
/*X*/app.delete('/api/users/:id', auth, isSuperAdmin, deleteUser) // DONE

// APPOINTMENTS RUTES 
app.get('/api/appointments', auth, getAllAppointment) // DONE TODAS LAS CITAS DEL USUARIO REGISTRADO 
app.get('/api/appointments/:id', auth, getAppointment) // DONE UNA CITA DICIENDO ID DE LA CITA Un user solo puede ver sus citas. Admin o super las citas de todos (una a una)
app.post('/api/appointments', auth, isAdmin, createAppointment) // DONE
app.put('/api/appointments', auth, updateAppointment) // DONE LE PASAS EL ID DE LA CITA QUE QUIERES MODIFICAR, LA NUEVA FECHA Y LA HORA. Un usuario solo puede modificar sus citas. Un admin y un super pueden modificar las todas las citas.

// SERVICES RUTES
app.get('/api/services', getServices) //Done
/*X*/app.post('/api/services', auth, isSuperAdmin, createService) //Done
/*X*/app.put('/api/services/:id', auth, isSuperAdmin, updateService) //Done
/*X*/app.delete('/api/services/:id', auth, isSuperAdmin, deleteService) //Done
