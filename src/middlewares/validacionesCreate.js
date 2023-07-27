const { check } = require('express-validator');



module.exports = [
  check('title').notEmpty().withMessage('Agregá un titulo').trim(),
  check('rating').isFloat( {min: 1, max: 10} ).withMessage('Ingrese un rating del 1 al 10'),
  check('awards').isInt( {gte: 0} ).withMessage('Ingrese la cantidad de premios'),
  check('release_date').notEmpty().withMessage('Indicá una fecha válida'),
  check('length').isInt( {gt: 0} ).withMessage('Ingresá un valor válido'),
  check('genre_id').isInt( {gt: 0} ).withMessage('Ingrese un género válido'),
  check('image').custom((value, {req}) => {
    if(req.fileError) {
      throw new Error ('Adjunte una imagen válida')
    }
    return true
  })
]

