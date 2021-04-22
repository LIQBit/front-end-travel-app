import { app } from './server';
//const app = require('./server.js')
const supertest = require('supertest');
const request = supertest(app)

it('test the /all endpoint', async done => {
    const response = await request.get('/all')

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
    done()
})