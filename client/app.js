(function(){

	'use strict';

	var appName = 'myNotes';
	var app = angular.module(appName, ['ui.router', 'notes']);
	angular.element(document).ready(function() {
		angular.bootstrap(document, [appName]);
	});

	app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
    .state('notes', {
      url: '/',
      templateUrl: 'notes/templates/notes.index.html',
      controller:'notesCtrl'
    })

	});

})()
