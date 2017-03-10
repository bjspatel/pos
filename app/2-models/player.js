/**
 * @file
 * Player model schema.
 */
(function () {
    'use strict';

    const mongoose    = require('mongoose');
    const schemaSpecs = require('../8-specifications/resource/schema');

    const playerSchema = new mongoose.Schema(
        schemaSpecs.player,
        { collection: 'player' }
    );

    const playerModel = mongoose.model('player', playerSchema);

    module.exports.schema  = playerSchema.paths;
    module.exports.model   = playerModel;
})();
