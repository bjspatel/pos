'use strict'

const CRUD           = require('./core/crud')
const SentenceModel  = require('../2-models').sentence.model
const utility        = require('../6-helpers/utility')
const SentenceWorker = new CRUD(SentenceModel)

SentenceWorker.create = async function(req, res, next) {

    try {
        const sentenceData = await this._create(req.body)
        res.data      = sentenceData.toObject()
        req.isHandled = true
        next()
    } catch(err) {
        next(err)
    }
}

SentenceWorker.update = async function(req, res, next) {
    const query = { _id: req.sentence.id }
    const data  = req.body

    try {
        const sentenceData = await this._update(query, data)
        res.data    = sentenceData.toJSON()
        req.handled = true
        next()
    } catch (err) {
        next(err)
    }
}

SentenceWorker.delete = async function(req, res, next) {
    const query = { email: req.params.email }

    try {
        await this._delete(query)
        req.handled = true
        next()
    } catch(err) {
        next(err)
    }
}

SentenceWorker.next = async function(req, res, next) {

    try {
        const sentencesData = await this._readMany({})
        const index   = Math.floor(Math.random()*(sentencesData.length))
        res.data      = sentencesData[index]
        req.isHandled = true
        next()
    } catch(err) {
        next(err)
    }
}

SentenceWorker.readMany = async function(req, res, next) {

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
        const sentencesData = this._readMany(query, paginateOptions)
        res.data    = sentencesData.toJSON()
        req.handled = true
        next()
    } catch(err) {
        next(err)
    }
}

SentenceWorker.populate = async function(req, res, next) {
    const sentenceId = req.params.sentence_id
    if(sentenceId == null) {
        throw 'Cannot populate sentence'
    }
    const query = { _id: sentenceId }

    try {
        req.sentence = await this._read(query)
        next()
    } catch(err) {
        next(err)
    }
}

SentenceWorker.read = SentenceWorker.populate

utility.bindWorker(SentenceWorker)

module.exports = SentenceWorker
