/**
 * Binds all model schema specifications in a single object
 */
'use strict'

module.exports = require('require-dir')('.', { camelcase: true })
