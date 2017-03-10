(function() {

    'use strict';

    const CRUD         = require('./core/crud');
    const PlayerModel  = require('../2-models').player.model;
    const utility      = require('../6-helpers/utility');
    const PlayerWorker = new CRUD(PlayerModel);

    PlayerWorker.register = function(req, res, next) {

        this._create(req.body)
        .then(playerData => {
            res.data    = playerData.toObject();
            req.handled = true;
            next();
        })
        .catch((err) => {
            next(err);
        });
    };

    PlayerWorker.update = function(req, res, next) {

        const query = { _id: req.player.id };
        const data  = req.body;

        this._update(query, data)
        .then(playerData => {
            res.data    = playerData.toJSON();
            req.handled = true;
            next();
        })
        .catch(next);
    };

    PlayerWorker.delete = function(req, res, next) {

        const query = { email: req.params.email };
        this._delete(query)
        .then(removedPlayer => {
            req.handled = true;
            next();
        })
        .catch(next);
    };

    PlayerWorker.populate = function(req, res, next) {
        const playerId = req.params.player_id;
        if(playerId == null) {
            throw 'Cannot populate player';
        }
        const query = { _id: playerId };

        this._read(query)
        .then(playerData => {
            req.player = playerData;
            next();
        })
        .catch(next);
    };

    PlayerWorker.read = PlayerWorker.populate;

    utility.bindWorker(PlayerWorker);

    module.exports = PlayerWorker;
})();
