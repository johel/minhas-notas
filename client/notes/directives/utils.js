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



// module.directive('contenteditable', function() {
//   return {
// 	  require: 'ngModel',
// 	  link: function(scope, elm, attrs, ctrl) {
// 	      // view -> model
// 	      elm.bind('blur', function() {
// 	          scope.$apply(function() {
// 	              ctrl.$setViewValue(elm.html());
// 	              console.log(scope.note.text, 'text');
// 	              console.log('ctrl', ctrl);
// 	          });
// 	      });

// 	      // model -> view
// 	      ctrl.$render = function() {
// 	          elm.html(ctrl.$viewValue);
// 	      };

// 	      // load init value from DOM
// 	      // ctrl.$setViewValue(elm.html());
// 	  }
//   };
// });


module.directive('onEdit', function($timeout) {
  return {
	  require: ['ngModel'],
	  link: function(scope, elm, attrs, controllers) {
	  		console.log('link function on edit')
	      var modelCtrl = controllers[0];
	      // view -> model
	      elm.bind('blur', function() {
	      		console.log('blur callback in link function')
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