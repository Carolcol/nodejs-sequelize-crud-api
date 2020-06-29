const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'caroline25', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
