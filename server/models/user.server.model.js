(function(){

"use strict";

module.exports = function(sequelize, Sequelize){
  
  var crypto = require('crypto');

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
    freezeTableName: true,
    instanceMethods: {
      hashPassword: function(password) {
        return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
      },
      authenticate: function(password) {
        return this.password === this.hashPassword(password);
      }
    }
  });

  User.hook('beforeValidate', function(user, options) {
    if (this.password) {
      this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
      this.password = this.hashPassword(this.password);
    }
  })

  return User;

}


})()

