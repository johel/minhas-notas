var app = angular.module('notes');

app.controller('notesCtrl', function($scope,$timeout, NoteService){

	NoteService.get().then(function(notes){
		$scope.notes = NoteService.notes;
	}, function(err){
		console.log('err', err);
	})

	
	$scope.addNote = function(){
		NoteService.add({});
	}
	$scope.delete = function(note){
		NoteService.delete(note);
	}

	$scope.edit = function(note) {
		console.log('clicked edit');
		$scope.editedNote = note;

		//extend makes a shallow copy of own properties of one or more source objects
		// here "note" is an object whose properties are not objects so shallow copy is the same as deep copies
		//ex: var object = angular.extend({}, object1, object2).
		$scope.originalNote = angular.extend({}, note);
	}

	$scope.saveEdits = function (note, $event) {
		console.log('saveEdits');
		
		//if esc was pressed
		if ($scope.reverted) {
			$scope.reverted = false;
			return;
		}

		//if no changes were made to the original text
		if (note.text === $scope.originalNote.text) {
			console.log('exactly equal to original');
			return;
		}

		NoteService.update(note);
	};

	$scope.revertEdits = function (note) {
		console.log('evert edits');
		$scope.reverted = true;

		/****Other and better solution if it was possible to pass $event to custom onEscape directive just like ng-blur does
			It is better because you can truly reuse the directive. The way it is implemented just solves our specific problem.
		 ****/
		// $timeout(function () {
		// 	// console.log('elem inside link', elem);
		// 	// console.log('scope inside link', scope);
		// 	$event.target.innerHTML = note.text;
		// 	$event.target.blur();
		// 	//just to be sure element will lose focus 
		// 	// elem[0].parentElement.focus();
		// }, 0, false);

	};

});