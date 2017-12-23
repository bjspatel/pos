/**
 * Binds all routes transform-filters into a single object
 */
'use strict'

const _                 = require('lodash')
const byResource        = require('require-dir')()
let allTransformFilters = {}

for(let resourceName of Object.keys(byResource)) {
    const routeFilters = byResource[resourceName]
    allTransformFilters = _.assign(allTransformFilters, routeFilters)
}

module.exports = allTransformFilters
