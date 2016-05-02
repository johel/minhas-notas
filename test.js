

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var Sequelize = require('sequelize');
var config = require('./config/config');
var sequelizeConfig = config.sequelizeConfig;
var sequelize = new Sequelize(sequelizeConfig.db, sequelizeConfig.username, sequelizeConfig.password, sequelizeConfig.params);
// sudo -i -u postgres(username)
//psql -d postgres(database)

var User = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    unique:true,
    field: 'email',
    validate:{isEmail: true}
  },
  username: {
    unique:true,
    type: Sequelize.STRING,
    field: 'username'
  },
  password: {
    type: Sequelize.STRING,
    field: 'password'
  },
  salt: {
    type: Sequelize.STRING,
    field: 'salt'
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


var createdUser = User.sync({force:true}).then(function () {
  return User.create({
    email:'teste1@gmail.com',
    username:'teste1',
    password:'teste1',
    salt:'salt'
  });
}, function(error){
  console.log('error', error);
});

