import { faker } from '@faker-js/faker';
import { AppDataSource } from '../db';
import { Appointment } from '../../models/Appointment';


const serviceSeedDatabase = async () => {
    try {
        await AppDataSource.initialize();

        const dateString = faker.date.between({ from: '2024-03-02', to: '2025-03-02' });
        const date = new Date(dateString);
    
        const appointment = Appointment.create({
            appointmentDate: date,
            user: { id: faker.number.int({ min: 1, max: 10 }) },
            service: { id: faker.number.int({ min: 1, max: 9 }) }
        })
        await appointment.save();

    } catch (error) {
        console.error(error);

    } finally {
        await AppDataSource.destroy();
    }
}


export const generateAppointmentsDataBase= async (quantity: number) => {
    for (let i = 0; i < quantity; i++) {
        await serviceSeedDatabase();
    }

    console.log("---------------------------------------")
    console.log("++++++++++ CITAS CREADAS (50) +++++++++")
    console.log("---------------------------------------")
}


