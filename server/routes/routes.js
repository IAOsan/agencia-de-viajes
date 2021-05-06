// express
const express = require('express');
// modelos(ahora los modelos se han movido a los controladores)
// controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');
// router
const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                                    ROOT                                    */
/* -------------------------------------------------------------------------- */

router.get('/', homeController.consultasHomePage);

/* -------------------------------------------------------------------------- */
/*                                  NOSOTROS                                  */
/* -------------------------------------------------------------------------- */

router.get('/nosotros', nosotrosController.infoNosotros);

/* -------------------------------------------------------------------------- */
/*                                   VIAJES                                   */
/* -------------------------------------------------------------------------- */
router.get('/viajes', viajesController.consultasViajes);
// single viaje
router.get('/viajes/:id', viajesController.consultaSingleViaje);

/* -------------------------------------------------------------------------- */
/*                                TESTIMONIALES                               */
/* -------------------------------------------------------------------------- */
router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
router.post('/testimoniales', testimonialesController.crearTestimonial);

module.exports = router;
