// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies

var models = require('../sequelize');
var User = models.User;
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

// Create the Local strategy configuration method
module.exports = function() {
	// Use the Passport's Local strategy 
	passport.use(new LocalStrategy(function(username, password, done) {
		// Use the 'User' model 'findOne' method to find a user with the current username
		User.findOne({
			where: {username: username}
		}).then(function(user) {
			
			// If a user was not found, continue to the next middleware with an error message
			if (!user) {
				return done(null, false, {
					message: 'Unknown user'
				});
			}

			// If password is incorrect, continue to the next middleware with an error message
			if (!user.authenticate(password)) {
				return done(null, false, {
					message: 'Invalid password'
				});
			}
			
			return done(null, user);

		}).catch(function(err){
			done(err);
		})
	}));

};