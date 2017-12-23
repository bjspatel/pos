    'use strict'

    const supertest = require('supertest')
    const expect    = require('chai').expect
    const server      = supertest.agent('http://localhost:8080')

    describe('Sentence next tests', () => {
        it('Next sentence', done => {

            const input = {}

            server.post('/api/sentences/next')
            .send(input)
            .end((err, res) => {
                const result = res.body
                console.log('RESPONSE: ', JSON.stringify(result, null, 4))
                done()
            })
        })
    })
