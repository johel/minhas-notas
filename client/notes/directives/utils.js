var module = angular.module('notes');

module.directive('onEscape', function ($timeout) {
	'use strict';

	var ESCAPE_KEY = 27;

	return function (scope, elem, attrs) {
		elem.bind('keydown', function (event) {
			if (event.keyCode === ESCAPE_KEY) {
				scope.$apply(attrs.onEscape);
				$timeout(function () {
						elem.html(scope.note.text);
						elem[0].blur();
					}, 0, false);
			}
		});

		scope.$on('$destroy', function () {
			elem.unbind('keydown');
		});
		
	};
});


module.directive('onEdit', function() {
  return {
	  require: ['ngModel'],
	  link: function(scope, elm, attrs, controllers) {
	      var modelCtrl = controllers[0];
	      // view -> model
	      elm.bind('blur', function() {
	      		// console.log('blur callback in link function')
	          scope.$apply(function() {
	              modelCtrl.$setViewValue(elm.html());
	          });
 						// scope.$apply(attrs.onEdit);
 						scope.$evalAsync( attrs.onEdit )

	      });

	      // model -> view
	      modelCtrl.$render = function() {
	          elm.html(modelCtrl.$viewValue);
	      };
	  }
  };
});