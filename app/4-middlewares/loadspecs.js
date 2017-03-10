/**
 * Adds all resource and route specifications on the request object
 */
(function() {
    'use strict';

    const _ = require('lodash');

    module.exports = function(req, res, next) {

        const specs      = require('../8-specifications');
        const route      = `[${req.method.toLowerCase()}] ${req.baseUrl}${req.route.path}`;
        const routeMeta  = specs.route.meta.byRoute[route];

        const resource   = routeMeta.resource;
        const routeId    = routeMeta.id;

        const routeSpecs = {
            validationDefs:  specs.resource.validation.defs,
            validationSpecs: specs.resource.validation.specs[resource],
            transformMap:    specs.resource.transformMap[resource],
            dbFilter:        specs.resource.dbFilter[resource],

            paramPrefs:      specs.route.paramPrefs[routeId],
            transformFilter: specs.route.transformFilter[routeId],
            meta:            routeMeta
        };

        req.specs = _.cloneDeep(routeSpecs);
        next();
    };
})();
