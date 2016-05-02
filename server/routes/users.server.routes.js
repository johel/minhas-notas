// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../controllers/users.server.controller'),
	passport = require('passport');

// Define the routes module' method
module.exports = function(app) {

	app.route('/signup')
	   .get(users.renderSignup)
	   .post(users.signup);

	app.route('/signin')
	   .get(users.renderSignin)
	   .post(users.signin);

	app.get('/signout', users.signout);

};