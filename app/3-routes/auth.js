'use strict'

const express = require('express')
const router  = express.Router()
const {
    authenticate,
    transform,
    validate,
    respond
}             = require('../4-middlewares')
const {
    login,
    logout
}             = require('../5-workers/auth')

router.post('/login', transform, validate, transform, login)

router.post('/logout', authenticate, logout)

router.use('/', respond)

module.exports = router
