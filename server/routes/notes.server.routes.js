var notes = require('../controllers/notes.server.controller');

module.exports = function(app){
	app.route('/')
			.get(notes.renderIndex);

	app.route('/')
		.get(notes.renderIndex);

	app.route('/api/notes')
	   .get(notes.list)
	   .post(notes.create);
}