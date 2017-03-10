(function() {
    
    'use strict';

    const CRUD       = require('./core/crud');
    const UserModel  = require('../2-models').user.model;
    const utility    = require('../6-helpers/utility');
    const UserWorker = new CRUD(UserModel);

    UserWorker.register = function(req, res, next) {

        this._create(req.body)
        .then(userData => {
            res.data      = userData.toObject();
            req.isHandled = true;
            next();
        })
        .catch((err) => {
            next(err);
        });
    };

    UserWorker.activate = function(req, res, next) {

        const query = { _id: req.user.id };
        const data  = { status: 'A' };

        this._update(query, data)
        .then(userData => {
            res.data    = userData.toObject();
            req.handled = true;
            next();
        })
        .catch(next);
    };

    UserWorker.update = function(req, res, next) {

        const query = { _id: req.user.id };
        const data  = req.body;

        this._update(query, data)
        .then(userData => {
            res.data    = userData.toJSON();
            req.handled = true;
            next();
        })
        .catch(next);
    };

    UserWorker.delete = function(req, res, next) {

        const query = { email: req.params.email };
        this._delete(query)
        .then(removedUser => {
            req.handled = true;
            next();
        })
        .catch(next);
    };

    UserWorker.readMany = function(req, res, next) {

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
        .then(usersData => {
            res.data    = usersData.toJSON();
            req.handled = true;
            next();
        })
        .catch(next);
    };

    UserWorker.populate = function(req, res, next) {
        const userId = req.params.user_id;
        if(userId == null) {
            throw 'Cannot populate user';
        }
        const query = { _id: userId };

        this._read(query)
        .then(userData => {
            req.user = userData;
            next();
        })
        .catch(next);
    };

    UserWorker.read = UserWorker.populate;

    utility.bindWorker(UserWorker);

    module.exports = UserWorker;
})();
