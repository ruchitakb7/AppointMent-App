const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs_project', 'root', 'ruchita123@', {
    dialect: 'mysql',
    host: 'localhost'
  });
  
  module.exports = sequelize;