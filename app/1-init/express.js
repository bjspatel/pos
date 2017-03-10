//-----------------------------------load modules------------------------------------\\
var express    = require('express');

var logger     = require('morgan');
var bodyParser = require('body-parser');

var config     = require('../../config');

module.exports = function(callback) {

    //--------------------setup the express application-------------------------\\
    const app = express();

    app.use(logger('dev'))          // log every request to console
    .use(bodyParser.json())         // support JSON-encoded bodies
    .use(bodyParser.urlencoded({    // support URL-encoded bodies
        extended: false
    }));

    app.use('/docs', express.static('docs'));

    //------------------------------set routes----------------------------------\\
    app.use('/api', require('../3-routes'));

    app.use(require('../4-middlewares/error'));

    //-----------------------------start server---------------------------------\\
    app.listen(
		config.app_port,
		function() {
            console.log('> Server is running on port: ' + config.app_port);
            (typeof callback === 'function') && callback();
        }
	);
};
