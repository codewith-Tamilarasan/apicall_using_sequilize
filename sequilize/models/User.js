const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); 
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },

  age :{
    type :DataTypes.INTEGER
  }
});


module.exports = User;
