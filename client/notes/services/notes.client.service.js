var app = angular.module('notes');

app.factory('NoteService', function($http){
	var len = 4;
	var notes = [];
	for (var i = 1; i < len; i+=1) {
		notes.push({
			id:i,
			text:'Lembrete ' + i,
			date: new Date(2016,1,i),
			deleted:false
		})
	};
	
	var service = {
		notes: notes,
		add:function(note){
			this.notes.push(note);
		},
		findIndexById: function(id){
		 	var index = -1;
		 	var notes = this.notes;
		 	for (var i = 0; i < notes.length; i++) {
		 		if(notes[i].id === id){
					index = i;
					break;
				}
		 	};

			return index;
		},
		update:function(note){
			var index = this.findIndexById(note.id);
			var existingNote = this.notes[index];
			existingNote.text = note.text;
		},
		delete:function(note){
			console.log('id', note.id);
			var index = this.findIndexById(note.id);
			console.log('index', index);
			// var existingNote = this.notes[index];
			// existingNote.deleted = true;
			
			this.notes.splice(index, 1);
		}
	}

	return service;
});