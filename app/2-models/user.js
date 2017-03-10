/**
 * @file
 * User model schema.
 */
(function () {
    'use strict';

    const mongoose    = require('mongoose');
    const schemaSpecs = require('../8-specifications/resource/schema');

    const userSchema = new mongoose.Schema(
        schemaSpecs.user,
        { collection: 'user' }
    );

    userSchema.virtual('name')
    .get(function() {
        return [this.firstname, this.lastname].join(' ').trim();
    });

    const userModel = mongoose.model('user', userSchema);

    module.exports.schema  = userSchema.paths;
    module.exports.model   = userModel;
})();
