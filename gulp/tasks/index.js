/**
 * @file
 * Main file for all tasks.
 */
(function () {
    'use strict';

    const requireDir = require('require-dir');
    module.exports   = requireDir('.', {recurse: true, camelcase: true});
})();
