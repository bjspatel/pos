'use strict'

const userModel  = require('../2-models/user').model
const utility    = require('../6-helpers/utility')
const CRUD       = require('./core/crud')
const AuthWorker = new CRUD(userModel)

AuthWorker.login = function(req, res, next) {
    next()
}

AuthWorker.logout = function(req, res, next) {
    next()
}

utility.bindWorker(AuthWorker)

module.exports = AuthWorker
