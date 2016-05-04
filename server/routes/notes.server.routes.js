var notes = require('../controllers/notes.server.controller');

module.exports = function(app){
	app.route('/')
			.get(notes.renderIndex);

	app.route('/')
		.get(notes.renderIndex);

	app.route('/api/notes')
	   .get(notes.list)
	   .post(notes.create);

 	app.route('/api/note/:noteId')
 		.delete(notes.delete);

	// Set up the 'noteId' parameter middleware   
	app.param('noteId', notes.noteByID);

}