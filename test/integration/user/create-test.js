'use strict'

const supertest = require('supertest')
const expect    = require('chai').expect
const server      = supertest.agent('http://localhost:8080')

describe('User create tests', () => {
    it('Created user', done => {
        const input = {
            email: 'mail2bjs1@gmail.com',
            firstname: 'Brijesh',
            password: 'abcd1234',
            extraField: 'extraValue'
        }
        server.post('/api/users')
        .send(input)
        .end((err, res) => {
            const result = res.body
            expect(result.email).to.equal(input.email)
            expect(result.firstname).to.equal(input.firstname)
            expect(result.password).to.not.exist
            done()
        })
    })
})
