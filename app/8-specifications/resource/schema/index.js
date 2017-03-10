/**
 * Binds all model schema specifications in a single object
 */
(function() {
    
    'use strict';

    module.exports = require('require-dir')('.', { camelcase: true });
})();
