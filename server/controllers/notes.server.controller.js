'use strict';

// Load the module dependencies
var models = require('../../config/sequelize');
var Note = models.Note;


exports.renderIndex = function(req, res, next) {
	// console.log('userrrrrrrrrrrrrrr', JSON.stringify(req.user));
	res.render('index', {
		title: 'My Notes',
		user: req.user
	});
};


// Create a new controller method that retrieves a list of todos
exports.list = function(req, res) {
	// console.log('logged user', req.user);
	Note.findAll({
		where: {
	    userId: req.user.id
  	},
  	order: [ ['id', 'DESC'] ]
	}).then(function(notes){
  	// console.log('notes from sequelize query', notes);
		return res.json(notes);
	}).catch(function(err){
		return res.status(400).send({
			message: "could not find notes"
		});
	})

};