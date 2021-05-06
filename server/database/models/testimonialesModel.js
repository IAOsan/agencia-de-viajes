// sequelize
const { DataTypes } = require('sequelize');
// conexcion DB
const sequelize = require('../db');
// definicion del modelo
const Testimonial = sequelize.define('testimoniales', {
   nombre: {
      type: DataTypes.STRING,
   },
   correo: {
      type: DataTypes.STRING,
   },
   mensaje: {
      type: DataTypes.STRING,
   },
});

module.exports = Testimonial;
