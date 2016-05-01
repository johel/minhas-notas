(function(){

	'use strict';

	var appName = 'mean';
	var app = angular.module(appName, ['notes']);
	angular.element(document).ready(function() {
		angular.bootstrap(document, [appName]);
	});

})()
