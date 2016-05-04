var app = angular.module('notes');

app.factory('NoteService', function($http, $q){
	
	// var len = 4;
	// var notes = [];
	// for (var i = 1; i < len; i+=1) {
	// 	notes.push({
	// 		id:i,
	// 		text:' <b>Lembrete</b> ' + i + '<div>teste</div>',
	// 		date: new Date(2016,1,i),
	// 		deleted:false
	// 	})
	// };
	
	var service = {
		notes: [],
		get: function(){
			var that = this;
			var url = 'api/notes';
			var request = $http.get(url);
			var d = $q.defer();

			request.then(function(response){
				var results = response.data;
				angular.forEach(results,function(item, key){
					that.notes.push(item)
				});
				d.resolve();

			}, function(error){
				d.reject(error)
			})

			return d.promise;

		},
		add:function(){
			var that = this;
			var url = 'api/notes';
			var request = $http.post(url, {});
			var d = $q.defer();

			request.then(function(response){
				var note = response.data;
				that.notes.unshift(note)
				d.resolve(note);

			}, function(error){
				d.reject(error)
			})

			return d.promise;
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
			console.log('text',existingNote.text)
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