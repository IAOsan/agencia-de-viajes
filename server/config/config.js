const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
   path: path.resolve(__dirname, '../../', process.env.NODE_ENV + '.env'),
});

module.exports = {
   NODE_ENV: process.env.NODE_ENV || 'development',
   PORT: process.env.PORT || 3001,
   nombreSitio: {
      desarrollo: 'Agencia de viajes DESARROLLO',
      produccion: 'Agencia de viajes',
   },
   db: {
      database: process.env.db_database || 'agenciadeviajes',
      username: process.env.db_user || 'root',
      password: process.env.db_password || '',
      host: process.env.db_host || 'localhost',
      port: process.env.db_port || 3306,
   },
};
