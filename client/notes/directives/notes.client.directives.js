var module = angular.module('notes')

module.directive('myNote', function () {
	return {
		restrict: 'E',
		templateUrl: 'notes/templates/partials/note-content.html',
		replace: true,
		scope: {
			note: '=note'
		},
		link: function (scope, el, attrs) {
			console.log('link function')
		}
	};
});