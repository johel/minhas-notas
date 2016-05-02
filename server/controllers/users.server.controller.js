'use strict';

// Load the module dependencies
var models = require('../../config/sequelize');
var User = models.User,
		passport = require('passport');



exports.renderSignin = function(req, res, next) {
	if (!req.user) {
		res.render('signin', {
			title: 'Sign-in Form'
		});
	} else {
		return res.redirect('/');
	}
};

exports.renderSignup = function(req, res, next) {
	if (!req.user) {
		res.render('signup', {
			title: 'Sign-up Form'
		});
	} else {
		return res.redirect('/');
	}
};

// Create a new controller method that creates new 'regular' users
exports.signup = function(req, res, next) {

	if (!req.user) {

		var user = User.build(req.body);

		user.save().then(function() {

			// Passport 'login' method to login
			req.login(user, function(err) {
				
				if (err) return next(err);
				
				return res.redirect('/');
			});
		}).catch(function(err){
				return res.redirect('/signup');
		});
	} else {
		return res.redirect('/');
	}

};

exports.signout = function(req, res) {
	// Passport 'logout' 
	req.logout();

	res.redirect('/');
};

//middleware
exports.requiresLogin = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(401).send({
			message: 'User is not logged in'
		});
	}
	next();
};