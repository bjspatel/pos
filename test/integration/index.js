(function() {
    'use strict';

    process.env['NODE_ENV'] = 'test';

    describe('Beginning Test', function() {

        before(function(done) {
            const dbInitializer      = require('../../app/1-init/db');
            const expressInitializer = require('../../app/1-init/express');
            dbInitializer(() => {
                expressInitializer(done);
            });
        });

        require('./user');
        require('./sentence');
    });

})();