/**
 * Middleware: transform
 * Maps the api field names provided in the request body, to the associated database field name
 * - Map
 * - Add field
 * - Remove field
 */
'use strict'

const deepOperations = require('../6-helpers/deep-operations')
const specifications = require('../8-specifications')

function execute(data, specs = []) {
    const filteredData = {}
    for(let field of specs) {
        deepOperations.setDeepFromSrc(filteredData, field, data)
    }
    return filteredData
}

function filterMiddleware(req, res) {

    // TO DO
    let data          = req.isHandled ? res.data : req.body
    const filterSpecs = req.isHandled ? req.specs.transformFilter.out : req.specs.transformFilter.in

    data = execute(data, filterSpecs)
    if(req.isHandled) {
        res.data = data
    } else {
        req.body = data
    }
}

module.exports = (req, res, next) => {
    filterMiddleware(req, res)
    next()
}
