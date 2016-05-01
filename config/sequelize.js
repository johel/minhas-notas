(function(){

'use strict';

var Sequelize = require('sequelize');
var config = require('./config');
var sequelizeConfig = config.sequelizeConfig;
var sequelize = new Sequelize(sequelizeConfig.db, sequelizeConfig.username, sequelizeConfig.password, sequelizeConfig.params);
var model = {};

model.User = require('../server/models/user.server.model')(sequelize, Sequelize);
// model.Note = require('../server/model/note.server.model')(sequelize, Sequelize);
model.sequelize = sequelize;
model.Sequelize = Sequelize;


module.exports = model;


})()

