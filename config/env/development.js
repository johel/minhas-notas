(function(){

	'use strict';

	module.exports = {
		sequelizeConfig:{
			db:'notas',
			username:'johel',
			password:'password',
			params:{
				host: 'localhost',
			  dialect: 'postgres',

			  pool: {
			    max: 5,
			    min: 0,
			    idle: 10000
			  }
			}
		},
		sessionSecret: 'developmentSessionSecret',
	};

})()

