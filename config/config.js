(function(){
	'use strict';
	module.exports = require('./env/' + process.env.NODE_ENV + '.js');
})()
