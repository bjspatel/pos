(function() {
    'use strict';

    const supertest = require('supertest');
    const expect    = require('chai').expect;
    var server      = supertest.agent('http://localhost:8080');

    describe('Sentence create tests', function() {
        it('Created sentence', function(done) {
            const input = {
                parts: [
                    {
                        content: 'This',
                        tags: [{
                            code: 'aj',
                            depth: 1,
                            score: 6
                        }]
                    },
                    {
                        content: 'is',
                        tags: [{
                            code: 'vb',
                            depth: 1,
                            score: 3
                        }]
                    },
                    {
                        content: 'sentence',
                        tags: [{
                            code: 'nn',
                            depth: 1,
                            score: 6
                        }]
                    }
                ],
                level: {
                    core: 2,
                    modifier: 1,
                    joiner: 1,
                    vocab: 1
                }
            };

            server.post('/api/sentences')
            .send(input)
            .end(function(err, res) {
                console.log('ERROR: ', err);
                const result = res.body;
                console.log('RESPONSE: ', JSON.stringify(result, null, 4));
                done();
            });
        })
    });
})();
