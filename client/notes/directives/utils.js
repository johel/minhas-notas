var module = angular.module('notes');

module.directive('onEscape', function ($timeout) {
	'use strict';

	var ESCAPE_KEY = 27;

	return function (scope, elem, attrs) {
		elem.bind('keydown', function (event) {
			if (event.keyCode === ESCAPE_KEY) {
				scope.$apply(attrs.onEscape);
				$timeout(function () {
							// console.log('elem inside link', elem);
							// console.log('scope inside link', scope);
							elem.html(scope.note.text);
							elem[0].blur();
							//just to be sure element will lose focus 
							// elem[0].parentElement.focus();
						}, 0, false);
				}
		});

		scope.$on('$destroy', function () {
			elem.unbind('keydown');
		});
	};
});