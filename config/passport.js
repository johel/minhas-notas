
'use strict';


var passport = require('passport');
var models = require('./sequelize');
var User = models.User;

// Define the Passport configuration method
module.exports = function() {
	
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findOne({
			id: id,
			attributes: ['password', 'salt']
		}).then(function(user) {
			done(null, user);
		}).catch(function(err){
			done(err, null);
		});
	});

	// Load Passport's strategies configuration files
	require('./strategies/local.js')();
};