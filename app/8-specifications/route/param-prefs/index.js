/**
 * Binds all routes param-prefs into a single object
 */
'use strict'

const _           = require('lodash')
const byResource  = require('require-dir')()
let allParamPrefs = {}

for(let resourceName of Object.keys(byResource)) {
    const routeParamPrefs = byResource[resourceName]
    allParamPrefs = _.assign(allParamPrefs, routeParamPrefs)
}

module.exports = allParamPrefs
