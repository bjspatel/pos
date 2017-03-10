/**
 * @file
 * Initializes our app database with data for testing.
 */
(function () {
    'use strict';

    const gulp       = require('gulp');
    const path       = require('path');
    const exec       = require('child_process').exec;
    const config     = require('../../config');

    function parseDBURL (url) {
        // Using the `RegExp` constructor to help split longer regex
        // over multiple lines
        const regex   = new RegExp(
            [
                /^(mongodb:(?:\/{2})?)(([a-zA-Z0-9\-_]+?):([a-zA-Z0-9\-_]+?)@|:?@?)/,
                /([a-zA-Z0-9._]+?)(:(\d+))?\/([a-zA-Z0-9\-_]+?)$/
            ].map(r => r.source).join('')
        );
        const matches = url.match(regex);
        return {
            username: matches[3],
            password: matches[4],
            host: matches[5],
            port: matches[6],
            dbname: matches[8]
        };
    }

    function seedDatabase (done) {
        const seedScript = '"' + path.resolve(path.join(
            __dirname, '../scripts/db-seed.js'
        )) + '"';
        const components = parseDBURL(config('DB_URL'));
        const command    = ['mongo'];

        if (components.username && components.password) {
            command.push(`-u ${components.username} -p ${components.password}`);
        }

        command.push(
            components.host + (components.port ? components.port : '') +
            '/' + components.dbname
        );

        command.push(seedScript);

        exec(command.join(' '), function (err) {
            if (err) {
                console.log('An error occurred while seeding database');
                console.log(err.stack);
            }
            done();
        });
    }

    module.exports = function () {
        return seedDatabase;
    };
})();
