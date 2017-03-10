(function() {

    'use strict';

    const dbInitializer      = require('./app/1-init/db');
    const expressInitializer = require('./app/1-init/express');
    dbInitializer(expressInitializer);
})();
