import { roleSeedDatabase } from "./roleSeeds";
import { userSeedDatabase } from "./userSeeds";
import { serviceSeedDatabase } from "./servicesSeeds";
import { generateAppointmentsDataBase } from "./appointmentSeeds";

const seeder = async () => {
    try {
        await roleSeedDatabase();
        // await userSeedDatabase();
        // await serviceSeedDatabase();
        // await generateAppointmentsDataBase(50);
    } catch (error) {
        console.error('Error en la ejecución del seeder:', error);
    }
}

seeder();










