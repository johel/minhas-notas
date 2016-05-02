var notes = require('../controllers/notes.server.controller');

module.exports = function(app){
	app.route('/')
			.get(notes.renderIndex);
}