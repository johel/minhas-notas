var app = angular.module('notes');

app.factory('Notes', function($http){
	var service = {
		notes:['um', 'dois', 'tres']
	}

	return service;
});