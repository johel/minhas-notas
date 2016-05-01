

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var Sequelize = require('sequelize');
var config = require('./config/config');
var sequelizeConfig = config.sequelizeConfig;
var sequelize = new Sequelize(sequelizeConfig.db, sequelizeConfig.username, sequelizeConfig.password, sequelizeConfig.params);
// sudo -i -u postgres(username)
//psql -d postgres(database)

var User = sequelize.define('users', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  },
  email: {
    type: Sequelize.STRING,
    unique:true,
    field: 'email',
    validate:{isEmail: true}
  },
  password: {
    type: Sequelize.STRING,
    field: 'password'
  }
}, {
  freezeTableName: true
});

// var createdUser = User.sync().then(function () {
//   return User.create({
//     firstName: 'Johel',
//     lastName: 'Carvalho',
//     email:'johel.carvalho@gmail.com',
//     password:'password'
//   });
// });


var createdUser = User.sync().then(function () {
  return User.create({
    firstName: 'teste1',
    lastName: 'teste1',
    email:'teste1@gmail.com',
    password:'teste1'
  });
}, function(error){
  console.log('error', error);
});

