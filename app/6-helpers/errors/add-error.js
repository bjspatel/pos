'use strict'

const util        = require('util')
const CustomError = require('./core/custom-error')

function AddError(error = {}) {

    const options = {}
    // to be removed after checking
    if (error.name === 'MongoError' && error.code === 11000) {
        options.message = 'There was a duplicate key error'
    }
    options.message = error.message
    options.name    = 'AddError'
    options.status  = 500
    options.stack   = error.stack ? error.stack : Error.captureStackTrace(this)

    CustomError.call(this, options)
}

AddError.bind(AddError)
util.inherits(AddError, CustomError)

module.exports = AddError
