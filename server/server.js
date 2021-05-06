const path = require('path');
// express
const express = require('express');
// sequelize
const sequelize = require('./database/db');
// rutas
const routes = require('./routes/routes');
// config
const { nombreSitio, NODE_ENV, PORT } = require('./config/config');
// app init
const app = express();

// archivos estaticos
app.use(express.static(path.resolve(__dirname, '../', './public')));

// body parser
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// configuracion del motor de plantillas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// variables del sitio
app.use((req, res, next) => {
   const fecha = new Date();

   // muestra el año actual
   res.locals.fechaActual = fecha.getFullYear();
   // nombre de la pagina
   res.locals.nombreSitio =
      NODE_ENV === 'development'
         ? nombreSitio.desarrollo
         : nombreSitio.produccion;
   res.locals.ruta = req.path;
   next();
});

// enrutado
app.use('/', routes);

// llamada al servidor
app.listen(process.env.PORT, () => {
   console.log(`Server on port: ${PORT}`);
   // conectarse a la base de datos
   sequelize
      .authenticate()
      .then(() => {
         console.log('Conectado a la base de datos');
      })
      .catch((error) => {
         console.log('Se ha producido un error en DB: ', error);
      });
});
