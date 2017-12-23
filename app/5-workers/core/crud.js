'use strict'

const Promise = require('bluebird')
const {
    AddError,
    ReadError,
    UpdateError,
    DeleteError
}             = require('../../6-helpers/errors')

const CRUD = function(model) {
    this.model = model
}

function filterDb(model, data) {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

CRUD.prototype._create = function(data) {

    return filterDb(this.model, data,'in')
    .then(filteredData => {
        const model = new this.model(filteredData)
        return model.save(model)
    })
    .then(savedData => {
        return filterDb(this.model, savedData)
    })
    .catch(error => {
        throw new AddError(error)
    })
}

CRUD.prototype._read = function(query, fields = {}) {
    return this.model.findOne(query, fields)
    .catch(error => {
        throw new ReadError(error)
    })
}

CRUD.prototype._update = function(query, data) {
    return this.model.findOneAndUpdate(query, data)
    .catch(error => {
        throw new UpdateError(error)
    })
}

CRUD.prototype._delete = function(query) {
    return this.model.findOneAndRemove(query)
    .then((removedData) => {
        if(!removedData) {
            throw {
                httpStatus: 404,
                message: 'No record available'
            }
        }
        return removedData
    })
    .catch(error => {
        throw new DeleteError(error)
    })
}

CRUD.prototype._readMany = function(query, options) {
    return this.model.find(query).lean()
    .catch(error => {
        throw new ReadError(error)
    })
}

module.exports = CRUD
