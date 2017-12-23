'use strict'

const supertest = require('supertest')
const server      = supertest.agent('http://localhost:8080')

describe('User update tests', () => {
    it('Updated user', done => {
        server.put('/api/user')
        .end((err, res) => {
            console.log('UPDATE RESPONSE: ', JSON.stringify(res.body, null, 4))
            done()
        })
    })
})
