(function() {

    'use strict';

    const router   = require('express').Router();
    const {
        loadspecs,
        authenticate,
        transform,
        validate,
        respond
    }              = require('../4-middlewares');
    const sentence = require('../5-workers').sentence; 

    router.post('/',
        loadspecs,
        // transform,
        // validate,
        sentence.create,
        // transform,
        respond
    );

    router.post('/next/',
        loadspecs,
        sentence.next,
        transform,
        respond
    );

    router.put('/:user_id',
        loadspecs,
        authenticate,
        // transform,
        validate,
        sentence.populate,
        sentence.update,
        // transform,
        respond
    );

    router.delete('/:email',
        loadspecs,
        sentence.delete,
        respond
    );

    module.exports = router;
})();
