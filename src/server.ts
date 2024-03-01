
import "dotenv/config"; //archivo con las variables de entorno
import { app } from "./app";
import { AppDataSource } from "./database/db";

//Si existe un puerto en el archivo .env lo usa. Si no usa el 4001
const PORT = process.env.PORT || 4001;

const startServer = () => {
    
    AppDataSource.initialize()
        .then(() => {
            console.log('Database connected');

            app.listen(PORT, () => {
                console.log(`Server is running in port: ${PORT}`)
            })
        })
        .catch(error => {
            console.log(error)
        })
}

startServer();