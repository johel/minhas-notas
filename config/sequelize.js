(function(){

// see if necessary http://stackoverflow.com/questions/12487416/how-to-organize-a-node-app-that-uses-sequelize

'use strict';

var Sequelize = require('sequelize');
var config = require('./config');
var sequelizeConfig = config.sequelizeConfig;
var sequelize = new Sequelize(sequelizeConfig.db, sequelizeConfig.username, sequelizeConfig.password, sequelizeConfig.params);
var model = {};

model.User = require('../server/models/user.server.model')(sequelize, Sequelize);
model.Note = require('../server/models/note.server.model')(sequelize, Sequelize);
model.sequelize = sequelize;
model.Sequelize = Sequelize;

module.exports = model;


})()

