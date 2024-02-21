const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slot: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Product;
