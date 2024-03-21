import request from "supertest";
import { AppDataSource } from "../database/db";
import { app } from '../app'
import { get } from "http";
import { log } from "console";

let server: any;
let token = "";
let prueba: number;

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

describe('server tests', () => {
    test(' GET healthy', async () => {
        const { status, body } = await request(server)
            .get('/healthy')

        expect(status).toBe(200)
        expect(body.success).toBe(true)
        expect(body.message).toEqual("Server is healthy")
    })
})


describe('auth tests', () => {
    test('Register user', async () => {
        const { status, body } = await request(server)
            .post('/api/auth/register')
            .send({
                firstName: "Dani",
                email: "daniel@daniel.com",
                password: "123456"
            })

        expect(status).toBe(201)

        prueba = body.data
    })

    test('Register user wihtout password', async () => {
        const { status, body } = await request(server)
            .post('/api/auth/register')
            .send({
                email: "dani@dani.com",
                password: ""
            })
        expect(status).toBe(401)
    })

    test('Login user', async () => {
        const { status, body } = await request(server)
            .post('/api/auth/login')
            .send({
                email: "marta@marta.com",
                password: "123456"
            })
        token = body.token
        console.log(token)
        expect(status).toBe(202)
    })

})

test('delete user', async () => {

    const { status, body } = await request(server)
        .delete(`/api/users/${prueba}`)
        .set('Authorization', `Bearer ${token}`)

    expect(status).toBe(200)

})

