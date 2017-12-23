/**
 * Middleware: respond
 * Responds to the routes with data and appropriate status code
 */
'use strict'

function getStatusCode(req) {
    switch(req.method) {
    case 'POST':
        return 201
    case 'DELETE':
        return 204
    case 'GET':
    case 'PUT':
    default:
        return 200
    }
}

module.exports = (req, res, next) => {
    const status = getStatusCode(req)
    res.status(status).json(res.data)
    next()
}
