import { faker } from '@faker-js/faker';
import { AppDataSource } from '../db';
import { Appointment } from '../../models/Appointment';


// Función para generar un usuario falso con Faker
const generateFakeService = async () => {
    try {
        await AppDataSource.initialize();

        const fechaString = faker.date.between({ from: '2024-01-01', to: '2025-01-01' });
        const fecha = new Date(fechaString);
    
        const appointment = Appointment.create({
            appointmentDate: fecha,
            user: { id: faker.number.int({ min: 31, max: 39 }) },
            service: { id: faker.number.int({ min: 50, max: 55 }) }
        })
        await appointment.save();

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

    console.log("---------------------------------------")
    console.log("++++++++++ CITAS CREADAS (50) +++++++++")
    console.log("---------------------------------------")

}

generateFakeServices(50);