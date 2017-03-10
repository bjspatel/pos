/**
 * Middleware: validate
 * Validates the request body data formats (required/omissive constraints are checked in filter middleware)
 * - Specification for validation are made on each entity
 * - Specification are available at: /app/8-specifications/validation/specs
 * - Definitions are available at:   /app/8-specifications/validation/defs
 * 
 * Param-Sepcs
 * Validation-Specs
 */
(function() {

    'use strict';

    const _                   = require('lodash');
    const { ValidationError } = require('../6-helpers/errors');
    let definitions           = null;

    function hasChildSpecs(specValue) {
        return (_.isObject(specValue) && !specValue.rule);
    }

    function execute(data, specs, path = '') {

        let failures   = [];
        const prePath  = (path.length > 0) ? (path + '.') : path;
        for(let field of Object.keys(data)) {
            const fieldPath   = (prePath.length > 0) ? (prePath + '.' + field) : field;
            const value       = data[field];
            const presentSpec = specs[field];
            const isDeepSpec  = hasChildSpecs(presentSpec);
            if(presentSpec == null) {
                continue;
            }

            if(_.isArray(value)) {
                for(let index=0; index<value.length; index++) {
                    const element     = value[index];
                    const elementPath = [fieldPath, index].join('.');
                    if(_.isObject(element) && isDeepSpec) {
                        const presentFailures = execute(element, presentSpec, elementPath);
                        failures.push(presentFailures);
                    } else if(!_.isObject(element) && !isDeepSpec) {
                        const failure = executeRule(elementPath, element, presentSpec);
                        failures.push(failure);
                    } else {
                        throw 'incorrect spec';
                    }
                }
            } else if (_.isObject(value)) {
                if(isDeepSpec) {
                    const presentFailures = execute(value, presentSpec, fieldPath);
                    failures.push(presentFailures);
                } else {
                    throw 'incorrect spec';
                }
            } else {
                const failure = executeRule(fieldPath, value, presentSpec);
                failures.push(failure)
            }
        }

        return flatten(failures);
    }

    function flatten(arr) {
        arr = _.flattenDeep(arr);
        arr = _.without(arr, null);
        return arr;
    }

    function executeRule(path, value, spec) {

        if(_.isArray(spec)) {
            const failures = [];
            for(let presentSpec of spec) {
                const presentFailure = executeRule(path, value, presentSpec);
                failures.push(presentFailure);
            }
            return flatten(failures);
        } else {
            const rule = definitions[spec.rule];
            const params = [path, value];
            spec.value && params.push(spec.value);

            return rule.apply(null, params) || [];
        }
    }

    module.exports = function(req, res, next) {

        // TO DO

        // const specs = req.specs.validationSpecs;
        // const prefs = req.specs.paramPrefs;
        // definitions = req.specs.validationDefs;
        // const failures = execute(req.body, specs);
        // if(failures.length > 0) {
        //     next(new ValidationError(failures));
        // } else {
            next();
        // }
    };
})();
