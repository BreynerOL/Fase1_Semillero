const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;



const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});

setupModels(sequelize);
//La funcion sync lee los modelos y hace la creacion de las tablas
sequelize.sync();

module.exports = sequelize;
