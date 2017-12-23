'use strict'

const CRUD       = require('./core/crud')
const UserModel  = require('../2-models').user.model
const utility    = require('../6-helpers/utility')
const UserWorker = new CRUD(UserModel)

UserWorker.register = async function(req, res, next) {

    try {
        const userData = await this._create(req.body)
        res.data      = userData.toObject()
        req.isHandled = true
        next()
    } catch (err) {
        next(err)
    }
}

UserWorker.activate = async function(req, res, next) {
    const query = { _id: req.user.id }
    const data  = { status: 'A' }

    try {
        const userData = await this._update(query, data)
        res.data    = userData.toObject()
        req.handled = true
        next()
    } catch (err) {
        next(err)
    }
}

UserWorker.update = async function(req, res, next) {
    const query = { _id: req.user.id }
    const data  = req.body

    try {
        const userData = await this._update(query, data)
        res.data    = userData.toJSON()
        req.handled = true
        next()
    } catch (err) {
        next(err)
    }
}

UserWorker.delete = async function(req, res, next) {
    const query = { email: req.params.email }

    try {
        await this._delete(query)
        req.handled = true
        next()
    } catch (err) {
        next(err)
    }
}

UserWorker.readMany = async function(req, res, next) {
    const paginateOptions = {
        after: req.query.after,
        limit: req.query.limit,
        sort:  req.query.sort,
        lean:  req.query.lean
    }
    delete req.query.after
    delete req.query.limit
    delete req.query.sort
    delete req.query.lean
    const query = (Object.keys(req.query).length > 0) ? req.query : {}

    try {
        const usersData = await this._readMany(query, paginateOptions)
        res.data    = usersData.toJSON()
        req.handled = true
        next()
    } catch (err) {
        next(err)
    }
}

UserWorker.populate = async function(req, res, next) {
    const userId = req.params.user_id
    if(userId == null) {
        throw 'Cannot populate user'
    }
    const query = { _id: userId }

    try {
        const userData = await this._read(query)
        req.user = userData
        next()
    } catch (err) {
        next(err)
    }
}

UserWorker.read = UserWorker.populate

utility.bindWorker(UserWorker)

module.exports = UserWorker
