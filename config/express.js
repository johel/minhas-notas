// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	passport = require('passport');

module.exports = function() {
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	// Configure the 'session' middleware
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	// Set the application view engine and 'views' folder relative to the directory from where you launch your node process
	app.set('views', './server/views');
	app.set('view engine', 'ejs');


	// Configure the Passport middleware
	app.use(passport.initialize());
	app.use(passport.session());

	// Load the routing files
	require('../server/routes/users.server.routes.js')(app);

	// Configure static file serving relative to the directory from where you launch your node process
	// http://expressjs.com/en/starter/static-files.html
	app.use(express.static('./client'));

	return app;
};