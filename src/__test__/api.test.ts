import request from "supertest";
import { AppDataSource } from "../database/db";
import { app } from '../app'

let server: any;

beforeAll(async () => {
    await AppDataSource.initialize()

    server = app.listen(4001);
})

afterAll(async () => {
    try {
        if (server) {
            await server.close();
            console.log('Server closed');
        }

        await AppDataSource.destroy();
    } catch (error) {
        console.error('Error closing server and destroying database connection:', error);
        throw error;
    }
})


describe('server healthy', () => {
    test(' GET healthy', async () => {
        const { status, body } = await request(server).get('/healthy')
        expect(status).toBe(200)
        expect(body).toEqual(
            {
                success: true,
                message: "Server is healthy"
            }
        )
    })
})





