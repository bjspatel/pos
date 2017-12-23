'use strict'

const util        = require('util')
const CustomError = require('./core/custom-error')

function InternalError(options) {

    options.name = 'InternalError'
    options.status = 500
    options.stack = Error.captureStackTrace(this)

    CustomError.call(this, options)
}

InternalError.bind(InternalError)
util.inherits(InternalError, CustomError)

module.exports = InternalError
