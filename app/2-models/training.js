/**
 * @file
 * Training model initializing.
 */
(function () {
    'use strict';

    const mongoose    = require('mongoose');
    const schemaSpecs = require('../8-specifications/resource/schema');

    const trainingTagSchema        = new mongoose.Schema(schemaSpecs.trainingTag, { _id: false });
    schemaSpecs.training.selection = [trainingTagSchema];
    const trainingSchema           = new mongoose.Schema(schemaSpecs.training, { collection: 'training' });
    const trainingModel            = mongoose.model('training', trainingSchema);

    module.exports.schema = trainingSchema.paths;
    module.exports.model  = trainingModel;
})();
