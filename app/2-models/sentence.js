/**
 * @file
 * Sentence model initializing.
 */
(function () {
    'use strict';

    const mongoose    = require('mongoose');
    const schemaSpecs = require('../8-specifications/resource/schema');

    const sentencePartTag         = new mongoose.Schema(schemaSpecs.sentencePartTag, { _id: false });
    schemaSpecs.sentencePart.tags = [sentencePartTag];

    const sentencePart         = new mongoose.Schema(schemaSpecs.sentencePart, { _id: false });
    schemaSpecs.sentence.parts = [sentencePart];

    const sentenceSchema = new mongoose.Schema(schemaSpecs.sentence, { collection: 'sentence' });
    const sentenceModel  = mongoose.model('sentence', sentenceSchema);

    module.exports.schema = sentenceSchema.paths;
    module.exports.model  = sentenceModel;
})();
