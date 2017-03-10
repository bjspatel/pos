/**
 * Middleware: filter
 * Filters the request body data, on the basis of the route requested
 */
(function() {

    'use strict';

    const deepOperations = require('../6-helpers/deep-operations');
    const specifications = require('../8-specifications');

    function execute(data, specs = []) {
        for(let field of specs) {
            deepOperations.deleteDeep(data, field);
        }
    }

    module.exports = function(req, res, next) {
        // TO DO
        // TO THINK: Should be made a promise; rather than a middleware,
        // as it's going to associate with db layer

        // execute(data, filterSpecs);
        next();
    };
})();
