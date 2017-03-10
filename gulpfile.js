/**
 * @file
 * Available tasks for this project.
 */
(function () {
    'use strict';

    const gulp  = require('gulp');
    const tasks = require('./gulp/tasks');

    // singular tasks
    gulp.task('drop-db', tasks.dropDatabase());
    gulp.task('seed-db', tasks.seedDatabase());

})();
