var app = angular.module('notes');

app.factory('NoteService', function($http, $q){
	
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
				d.resolve(results);

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
		update:function(note, originalNote){
			var that = this;
			return $http.put('/api/note/' + note.id, {text:note.text})
				.then(function (savedNote) {
					return savedNote;
				}, function (error) {
					that.notes[that.notes.indexOf(note)].text = originalNote.text;
					return false;
				});
		},
		delete: function (note) {
			var that = this;
			return $http.delete('/api/note/' + note.id)
				.then(function () {
					that.notes.splice(that.notes.indexOf(note), 1);
					return true;
				}, function (error) {
					console.log('error', error);
					return false;
				});
		}
	}

	return service;
});