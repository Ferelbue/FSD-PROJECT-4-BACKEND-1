import { faker } from '@faker-js/faker';

import { AppDataSource } from '../db';
import { Appointment } from '../../models/Appointment';


// Función para generar un usuario falso con Faker
const generateFakeService = async () => {
    try {
        await AppDataSource.initialize();

        const appointment = Appointment.create();
        appointment.appointmentDate = faker.datatype.date();
        appointment.user.id = faker.datatype.number({ min: 1, max: 20 });

        await appointment.save();

        console.log("---------------------------------------")
        console.log("++++++++++ CITAS CREADAS (50) +++++++++")
        console.log("---------------------------------------")

    } catch (error) {
        console.error(error);

    } finally {
        await AppDataSource.destroy();
    }
}

// Generar múltiples servicios falsos
export const generateFakeServices = async (quantity: number) => {
    for (let i = 0; i < quantity; i++) {
        await generateFakeService();
    }
}

generateFakeServices(5);