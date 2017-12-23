'use strict'

const util        = require('util')
const CustomError = require('./core/custom-error')

function ReadError(error = {}) {

    const options   = {}
    options.name    = 'ReadError'
    options.message = error.message
    options.status  = 500
    options.stack   = error.stack ? error.stack : Error.captureStackTrace(this)

    CustomError.call(this, options)
}

ReadError.bind(ReadError)
util.inherits(ReadError, CustomError)

module.exports = ReadError
