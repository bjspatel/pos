(function() {

    'use strict';

    const util        = require('util');
    const CustomError = require('./core/custom-error');

    function DeleteError(error = {}) {

        const options   = {};
        options.name    = 'DeleteError';
        options.message = error.message;
        options.status  = error.httpStatus || 500;
        options.stack   = !!error.stack ? error.stack : Error.captureStackTrace(this);

        CustomError.call(this, options);
    }

    DeleteError.bind(DeleteError);
    util.inherits(DeleteError, CustomError);

    module.exports = DeleteError;
})();
