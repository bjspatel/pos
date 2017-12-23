'use strict'

const express = require('express')
const router  = express.Router()

const userRouter     = require('./user')
const playerRouter   = require('./player')
const sentenceRouter = require('./sentence')
const authRouter     = require('./auth')

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/players', playerRouter)
router.use('/sentences', sentenceRouter)

module.exports = router
