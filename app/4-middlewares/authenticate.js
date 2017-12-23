/**
 * Middleware: authenticate
 * Authenticates the request, and allows/prevents further middlewares exectution
 */
'use strict'

const PlayerWorker = require('../5-workers/player')

module.exports = async (req, res, next) => {
    const playerId = req.headers.token

    try {
        const playerData = await PlayerWorker.get({ _id: playerId })
        if(playerData) {
            req.player = playerData
            next()
        } else {
            res.status(401).json({ error: 'Authentication Failed' })
        }
    } catch(err) {
        res.status(500).json({ error: 'Error occured during Authentication' })
    }
}
