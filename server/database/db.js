// sequelize
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(
   process.env.db_database,
   process.env.db_username,
   process.env.db_password,
   {
      host: process.env.db_host,
      port: process.env.db_port,
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
