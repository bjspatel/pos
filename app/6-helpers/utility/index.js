'use strict'

const _ = require('lodash')

function bindWorker(worker, methodNames) {
    if(!methodNames) {
        methodNames = []
        for(let property of Object.keys(worker)) {
            const value = worker[property]
            if(_.isFunction(value) && (property !== 'model')) {
                methodNames.push(property)
            }
        }
    }
    _.bindAll(worker, methodNames)
}

module.exports = { bindWorker }
