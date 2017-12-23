'use strict'

const _           = require('lodash')
const util        = require('util')
const CustomError = require('./core/custom-error')

function ValidationError(failures) {
    failures       = !_.isArray(failures) ? [failures] : failures
    const messages = _.map(failures, function(failure) {
        return failure.message
    })

    const options = {
        name:    'ValidationError',
        status:  400,
        message: messages.join(' '),
        details: failures,
        stack:   Error.captureStackTrace(this)
    }

    CustomError.call(this, options)
}

ValidationError.bind(ValidationError)
util.inherits(ValidationError, CustomError)

module.exports = ValidationError
