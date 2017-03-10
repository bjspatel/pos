/**
 * Binds all the specification by grouping them into resource and routes
 */
(function() {
    'use strict';

    const dbFilter        = require('./resource/db-filter');
    const schema          = require('./resource/schema');
    const transformMap    = require('./resource/transform-map');
    const validationDefs  = require('./resource/validation/defs');
    const validationSepcs = require('./resource/validation/specs');

    const meta            = require('./route/meta');
    const paramPrefs      = require('./route/param-prefs');
    const transformFilter = require('./route/transform-filter');

    const allSpecs = {
        resource: {
            dbFilter,
            schema,
            transformMap,
            validation: {
                defs: validationDefs,
                specs: validationSepcs
            }
        },
        route: {
            meta,
            paramPrefs,
            transformFilter
        }
    };

    module.exports = allSpecs;
})();
