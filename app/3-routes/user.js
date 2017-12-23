'use strict'

const router  = require('express').Router()
const {
    loadspecs,
    authenticate,
    transform,
    validate,
    respond
}             = require('../4-middlewares')
const user    = require('../5-workers').user 

router.post('/',
    loadspecs,
    transform,
    validate,
    user.register,
    transform,
    respond
)

router.put('/:user_id',
    loadspecs,
    authenticate,
    // transform,
    validate,
    user.populate,
    user.update,
    // transform,
    respond
)

router.delete('/:email',
    loadspecs,
    user.delete,
    respond
)

module.exports = router
