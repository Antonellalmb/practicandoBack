const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');


// MIDDLEWARES
const validacionesCreate = require('../middlewares/validacionesCreate')
const multerMiddleware = require('../middlewares/multer');
const fileUpload = require('../middlewares/multer');



router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies', moviesController.createPocess)

//Rutas exigidas para la creación del CRUD
router.get('/movies/add', moviesController.add);

router.post('/movies/create', multerMiddleware.single("image"), validacionesCreate, moviesController.create);

router.get('/movies/edit/:id', moviesController.edit);

router.post('/movies/update/:id', moviesController.update);
//router.get('/movies/delete/:id', moviesController.delete);
//router.post('/movies/delete/:id', moviesController.destroy);

module.exports = router;