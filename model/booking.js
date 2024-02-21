const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('slot', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
  
});

module.exports = Product;
