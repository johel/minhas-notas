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
        var hashedPassword = crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
        console.log('salt', this.salt);
        console.log('hashedPassword', hashedPassword);
        return hashedPassword;
      },
      authenticate: function(password) {
        var hashedPassword = this.hashPassword(password);
        return hashedPassword === this.password;
      }
    },
      hooks: {
        beforeCreate: function(user, options) {
          if (user.password) {
            user.salt = crypto.randomBytes(16).toString('base64');
            user.password = user.hashPassword(user.password);
          }
        }
     }
  });

  // User.hook('beforeCreate', function(user, options) {
  //   console.log('before create dssssssssss');
  //   if (this.password) {
  //     this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
  //     this.password = this.hashPassword(this.password);
  //   }
  // })

  return User;

}


})()

