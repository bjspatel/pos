(function() {
    'use strict';

    const supertest = require('supertest');
    const expect    = require('chai').expect;
    var server      = supertest.agent('http://localhost:8080');

    describe('Sentence next tests', function() {
        it('Next sentence', function(done) {

            const input = {};

            server.post('/api/sentences/next')
            .send(input)
            .end(function(err, res) {
                console.log('ERROR: ', err);
                const result = res.body;
                console.log('RESPONSE: ', JSON.stringify(result, null, 4));
                done();
            });
        });
    });
})();
