// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var model = require('./sequelize');

model.User.findOne({id:1}).then(function(user){
	console.log('user blaaaaaaaaaaaaaaaaaaaaaaaaa', user.id);
})
