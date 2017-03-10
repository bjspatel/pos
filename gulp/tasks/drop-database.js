/**
 * @file
 * Drops database to ensure we test with a fresh copy next time.
 */
(function () {
    'use strict';

    const gulp     = require('gulp');
    const mongoose = require('mongoose');
    const config   = require('../../config');

    function dropDatabase (done) {
        mongoose.connect(config['db_url']);

        mongoose.connection.once('open', function () {
            mongoose.connection.db.dropDatabase();
            mongoose.connection.db.close();
            done();
        });
    }

    module.exports = function () {
        return dropDatabase;
    };
})();
