'use strict'

const dbUrl        = require('../../config').db_url
const mongoose     = require('mongoose')
mongoose.Promise = require('bluebird')

module.exports   = callback => {

    mongoose.connection.on('connected', function() {
        console.log('> Server connected Mongodb on ' + dbUrl)
        require('../2-models')
        if(typeof callback === 'function') {
            callback()
        }
    })

    mongoose.connection.on('error', err => {
        console.log('> Mongodb connection error: ', err)
    })

    mongoose.connection.on('disconnected', () => {
        console.log('> Server disconnected Mongodb')
        process.exit(0)
    })

    process.on('SIGINT', function() {
        console.log('> Server disconnecting MongoDB before application termination')
        mongoose.connection.close()
    })

    mongoose.connect(dbUrl)
}
