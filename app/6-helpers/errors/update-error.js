'use strict'

const util        = require('util')
const CustomError = require('./core/custom-error')

function UpdateError(error = {}) {

    const options   = {}
    options.name    = 'UpdateError'
    options.message = error.message
    options.status  = 500
    options.stack   = error.stack ? error.stack : Error.captureStackTrace(this)

    CustomError.call(this, options)
}

UpdateError.bind(UpdateError)
util.inherits(UpdateError, CustomError)

module.exports = UpdateError
