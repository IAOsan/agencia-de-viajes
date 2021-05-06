// sequelize
const { DataTypes } = require('sequelize');
// conexion db
const sequelize = require('../db');
// definicion del modelo
const Viaje = sequelize.define('viaje', {
   titulo: {
      type: DataTypes.STRING,
   },
   precio: {
      type: DataTypes.STRING,
   },
   fecha_ida: {
      type: DataTypes.DATE,
   },
   fecha_vuelta: {
      type: DataTypes.DATE,
   },
   imagen: {
      type: DataTypes.STRING,
   },
   descripcion: {
      type: DataTypes.STRING,
   },
   disponibles: {
      type: DataTypes.STRING,
   },
});

module.exports = Viaje;
