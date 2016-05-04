var app = angular.module('notes');

app.controller('notesCtrl', function($scope,$timeout, NoteService){

	$scope.notes = NoteService.notes;
	$scope.addNote = function(){
		NoteService.add({});
	}
	$scope.delete = function(note){
		NoteService.delete(note);
	}

	$scope.saveEdits = function (note, $event) {

		console.log('antes');
		if ($scope.reverted) {
			$scope.reverted = false;
			return;
		}

		console.log('depois');
		console.log('note', note);
		console.log('event', $event.target.innerHTML);


	};

	$scope.revertEdits = function (note) {
		console.log('chegou em revert edits');
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