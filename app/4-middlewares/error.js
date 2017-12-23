/**
 * Middleware: error
 * Handles errors thrown in any of the previous middleware
 */
'use strict'

module.exports = (err, req, res, next) => {

    let status  = err.status || 500
    let message = err
    if(err instanceof Error) {
        message = err.name + ': ' + err.message
    }

    res.status(status).send(message)
}
