

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var Sequelize = require('sequelize');
var config = require('./config/config');
var sequelizeConfig = config.sequelizeConfig;
var sequelize = new Sequelize(sequelizeConfig.db, sequelizeConfig.username, sequelizeConfig.password, sequelizeConfig.params);
// sudo -i -u postgres(username)
//psql -d postgres(database)

var Note = sequelize.define('notes', {
  text: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  userId: {
    type: Sequelize.INTEGER
  }
}, {
  freezeTableName: true
});


Note.sync({force:true}).then(function () {
  Note.create({userId:23});
  Note.create({text:'<b>Test Note</b>', userId:23});
}, function(error){
  console.log('there was an error');
});


// Note.sync().then(function () {
//   return Note.create({text:'<b>Test Note</b>'});
// }, function(error){
//   console.log('there was an error');
// });
