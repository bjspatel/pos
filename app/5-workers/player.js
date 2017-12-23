'use strict'

const CRUD         = require('./core/crud')
const PlayerModel  = require('../2-models').player.model
const utility      = require('../6-helpers/utility')
const PlayerWorker = new CRUD(PlayerModel)

PlayerWorker.register = async function(req, res, next) {

    try {
        const playerData = await this._create(req.body)
        res.data    = playerData.toObject()
        req.handled = true
        next()
    } catch (err) {
        next(err)
    }
}

PlayerWorker.update = async function(req, res, next) {
    const query = { _id: req.player.id }
    const data  = req.body

    try {
        const playerData = await this._update(query, data)
        res.data    = playerData.toJSON()
        req.handled = true
        next()
    } catch (err) {
        next(err)
    }
}

PlayerWorker.delete = async function(req, res, next) {
    const query = { email: req.params.email }

    try {
        await this._delete(query)
        req.handled = true
        next()
    } catch (err) {
        next(err)
    }
}

PlayerWorker.populate = async function(req, res, next) {
    const playerId = req.params.player_id
    if(playerId == null) {
        throw 'Cannot populate player'
    }
    const query = { _id: playerId }

    try {
        const playerData = this._read(query)
        req.player = playerData
        next()
    } catch (err) {
        next(err)
    }
}

PlayerWorker.read = PlayerWorker.populate

utility.bindWorker(PlayerWorker)

module.exports = PlayerWorker
