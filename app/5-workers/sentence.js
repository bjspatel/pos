(function() {
    
    'use strict';

    const CRUD           = require('./core/crud');
    const SentenceModel  = require('../2-models').sentence.model;
    const utility        = require('../6-helpers/utility');
    const SentenceWorker = new CRUD(SentenceModel);

    SentenceWorker.create = function(req, res, next) {

        this._create(req.body)
        .then(sentenceData => {
            res.data      = sentenceData.toObject();
            req.isHandled = true;
            next();
        })
        .catch((err) => {
            next(err);
        });
    };

    SentenceWorker.update = function(req, res, next) {

        const query = { _id: req.sentence.id };
        const data  = req.body;

        this._update(query, data)
        .then(sentenceData => {
            res.data    = sentenceData.toJSON();
            req.handled = true;
            next();
        })
        .catch(next);
    };

    SentenceWorker.delete = function(req, res, next) {

        const query = { email: req.params.email };
        this._delete(query)
        .then(removedSentence => {
            req.handled = true;
            next();
        })
        .catch(next);
    };

    SentenceWorker.next = function(req, res, next) {

        this._readMany({})
        .then(sentencesData => {
            const length = sentencesData.length;
            const index = Math.floor(Math.random()*(sentencesData.length));
            res.data    = sentencesData[index];
            req.isHandled = true;
            next();
        })
        .catch(next);
    };

    SentenceWorker.readMany = function(req, res, next) {

        const paginateOptions = {
            after: req.query.after,
            limit: req.query.limit,
            sort:  req.query.sort,
            lean:  req.query.lean
        };
        delete req.query.after;
        delete req.query.limit;
        delete req.query.sort;
        delete req.query.lean;
        const query = (Object.keys(req.query).length > 0) ? req.query : {};

        this._readMany(query, paginateOptions)
        .then(sentencesData => {
            res.data    = sentencesData.toJSON();
            req.handled = true;
            next();
        })
        .catch(next);
    };

    SentenceWorker.populate = function(req, res, next) {
        const sentenceId = req.params.sentence_id;
        if(sentenceId == null) {
            throw 'Cannot populate sentence';
        }
        const query = { _id: sentenceId };

        this._read(query)
        .then(sentenceData => {
            req.sentence = sentenceData;
            next();
        })
        .catch(next);
    };

    SentenceWorker.read = SentenceWorker.populate;

    utility.bindWorker(SentenceWorker);

    module.exports = SentenceWorker;
})();
