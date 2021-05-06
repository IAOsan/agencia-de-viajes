// modelo
const Viaje = require('../database/models/viajeModel');

const consultasViajes = (req, res) => {
   Viaje.findAll({})
      .then((viajes) => {
         res.render('viajes/viajes', { pagina: 'Próximos Viajes', viajes });
      })
      .catch((error) => {
         console.log('Hubo un error:', error);
      });
};

const consultaSingleViaje = (req, res) => {
   const item = req.params.id;
   Viaje.findOne({ where: { id: item } })
      .then((viaje) => {
         res.render('viajes/viaje', { viaje });
      })
      .catch((error) => {
         console.log('Hubo un error: ', error);
      });
};

module.exports = { consultasViajes, consultaSingleViaje };
