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
		 	var index = 0;
		 	this.notes.forEach(function(el){
				if(el.id === id){
					return index;
				}
				index +=1;
			})

			return -1;
		},
		update:function(note){
			var index = this.findIndexById(note.id);
			var existingNote = this.notes[index];
			existingNote.text = note.text;
		},
		delete:function(note){
			var index = this.findIndexById(note.id);
			var existingNote = this.notes[index];
			existingNote.deleted = true;
		}
	}

	return service;
});