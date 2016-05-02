'use strict';

// Load the module dependencies
var models = require('../../config/sequelize');


exports.renderIndex = function(req, res, next) {
	console.log('userrrrrrrrrrrrrrr', JSON.stringify(req.user));
	res.render('index', {
		title: 'My Notes',
		user: req.user
	});
};