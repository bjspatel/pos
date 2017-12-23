/**
 * @file
 * Main file for all tasks.
 */
'use strict'

const requireDir = require('require-dir')
module.exports   = requireDir('.', {recurse: true, camelcase: true})
