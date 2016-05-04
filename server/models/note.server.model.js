(function(){

"use strict";

module.exports = function(sequelize, Sequelize){

  var Note = sequelize.define('notes', {
    text: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    userId: {
      type: Sequelize.INTEGER
    },
  }, {
    freezeTableName: true
  });

  return Note;

}


})()

