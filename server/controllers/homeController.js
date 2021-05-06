// modelo
const Viaje = require('../database/models/viajeModel');
const Testimonial = require('../database/models/testimonialesModel');

const consultasHomePage = (req, res) => {
   const viajes = Viaje.findAll({ limit: 3 });
   const testimoniales = Testimonial.findAll({ limit: 3 });

   Promise.all([viajes, testimoniales])
      .then((resultado) => {
         res.render('index', {
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1],
         });
      })
      .catch((error) => {
         console.log(error);
      });
};
module.exports = { consultasHomePage };
