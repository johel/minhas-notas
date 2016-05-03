var app = angular.module('notes');

app.controller('notesCtrl', function($scope, Notes){

	$scope.message = JSON.stringify(Notes.notes);

});