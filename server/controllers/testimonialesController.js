// modelo
const Testimonial = require('../database/models/testimonialesModel');

const mostrarTestimoniales = (req, res) => {
   Testimonial.findAll({})
      .then((testimoniales) => {
         res.render('testimoniales/testimoniales', {
            pagina: 'Testimoniales',
            testimoniales,
         });
      })
      .catch((error) => {
         console.log(error);
      });
};
const crearTestimonial = (req, res) => {
   const { nombre, correo, mensaje } = req.body;
   // validar formulario
   let errores = [];
   if (!nombre) {
      errores = [...errores, { campo: 'nombre', mensaje: 'Agrega tu nombre' }];
   }
   if (!correo) {
      errores = [...errores, { campo: 'correo', mensaje: 'Agrega tu correo' }];
   }
   if (!mensaje) {
      errores = [
         ...errores,
         { campo: 'mensaje', mensaje: 'Agrega tu mensaje' },
      ];
   }
   // revisar errrores
   if (errores.length > 0) {
      // envia los errores a la vista
      // lo que el usuario haya llenado se pasa a la vista
      return res.render('testimoniales/testimoniales', {
         pagina: 'Testimoniales',
         nombre,
         correo,
         mensaje,
         errores,
      });
      // res.json({ errores });
   }
   // guardar en DB
   Testimonial.create({
      nombre,
      correo,
      mensaje,
   })
      .then((testimonial) => {
         res.redirect('/testimoniales');
      })
      .catch((error) => {
         console.log(error);
      });
};
module.exports = { mostrarTestimoniales, crearTestimonial };
