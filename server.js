// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
var models = require('./config/sequelize'),
	express = require('./config/express'),
	passport = require('./config/passport');


var app = express();

var passport = passport();

models.sequelize.sync().then(function () {
 	app.listen(3000);
	console.log('Server running at http://localhost:3000/');
});


module.exports = app;