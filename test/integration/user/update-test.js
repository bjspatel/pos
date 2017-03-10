(function() {
    'use strict';

    const supertest = require('supertest');
    var server      = supertest.agent('http://localhost:8080');

    describe('User update tests', function() {
        it('Updated user', function(done) {
            server.put('/api/user')
            .end(function(err, res) {
                console.log('UPDATE RESPONSE: ', JSON.stringify(res.body, null, 4));
                done();
            });
        })
    });
})();
