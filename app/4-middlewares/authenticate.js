/**
 * Middleware: authenticate
 * Authenticates the request, and allows/prevents further middlewares exectution
 */
(function() {
    'use strict';

    const PlayerWorker = require('../5-workers/player');

    module.exports = function(req, res, next) {
        const playerId = req.headers.token;
        PlayerWorker.get({ _id: playerId })
        .then((playerData) => {
            if(playerData) {
                req.player = playerData;
                next();
            } else {
                res.status(401).json({ error: 'Authentication Failed' });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error occured during Authentication' });
        });
    };
})();
