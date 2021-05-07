// sequelize
const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
   config.db.database,
   config.db.username,
   config.db.password,
   {
      host: config.db.host,
      port: config.db.port,
      dialect: 'mysql',
      define: {
         timestamps: false,
      },
      pool: {
         max: 5,
         idle: 30000,
         acquire: 60000,
      },
      operatorsAliases: 0,
      logging: false,
   }
);

module.exports = sequelize;
