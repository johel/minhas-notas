var notes = require('../controllers/notes.server.controller');
var users = require('../controllers/users.server.controller');

module.exports = function(app){

	app.route('/')
		.get(users.requiresLogin, notes.renderIndex);

	app.route('/api/notes')
	   .get(users.requiresLogin, notes.list)
	   .post(users.requiresLogin, notes.create);

 	app.route('/api/note/:noteId')
 		.put(users.requiresLogin,notes.hasAuthorization, notes.update)
 		.delete(users.requiresLogin,notes.hasAuthorization, notes.delete);

	// Set up the 'noteId' parameter middleware   
	app.param('noteId', notes.noteByID);

}