'use strict'

const util = require('util')

function CustomError(options) {
    Error.call(this)
    this.name    = options.name || 'Custom Error'
    this.message = options.message || ''
    this.status  = options.status || 500
    this.details = options.details || {}
    this.stack   = options.stack || Error.captureStackTrace(this)
}

CustomError.bind(CustomError)
util.inherits(CustomError, Error)

CustomError.prototype.toString = function() {
    return (this.name + ': ' + this.message)
}

module.exports = CustomError
