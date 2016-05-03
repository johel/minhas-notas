var app = angular.module('notes');

app.controller('notesCtrl', function($scope, NoteService){

	$scope.notes = NoteService.notes;
	$scope.addNote = function(){
		NoteService.add({});
	}
	$scope.delete = function(note){
		NoteService.delete(note);
	}

});