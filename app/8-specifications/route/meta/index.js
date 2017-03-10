/**
 * Binds all meta specifications in a single object
 */
(function() {
    'use strict';

    const byResource       = require('require-dir')();
    const byId             = {};
    const byRoute          = {};
    const groupedRouteMeta = { byId, byRoute };

    for(let resourceName of Object.keys(byResource)) {
        const allResourceMeta = byResource[resourceName];
        for(let meta of allResourceMeta) {
            byId[meta.id]       = meta;
            byRoute[meta.route] = meta;
        }
    }

    module.exports = groupedRouteMeta;
})();
