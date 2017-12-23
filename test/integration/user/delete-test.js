'use strict'

const supertest = require('supertest')
const expect    = require('chai').expect
const server    = supertest.agent('http://localhost:8080')
// const { showError } = require('../test-util')

describe('User delete tests', () => {
    it('Deleted user', done => {
        server.delete('/api/users/mail2bjs1@gmail.com')
        .end((err, res) => {
            expect(res.status).to.equal(204)
            // showError(err || res)
            done()
        })
    })
})
