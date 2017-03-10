(function() {

    'use strict';

    const router  = require('express').Router();
    const {
        loadspecs,
        authenticate,
        transform,
        validate,
        respond
    }             = require('../4-middlewares');
    const player  = require('../5-workers').player; 

    router.post('/',
        loadspecs,
        // transform,
        validate,
        player.register,
        // transform,
        respond
    );

    router.put('/:player_id',
        loadspecs,
        authenticate,
        // transform,
        validate,
        player.populate,
        player.update,
        // transform,
        respond
    );

    router.delete('/:player_id',
        loadspecs,
        player.delete,
        respond
    );

    module.exports = router;
})();
