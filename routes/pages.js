const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceControllers');
const contactController = require('../controllers/contactControllers');
const galeriaController = require('../controllers/galeriControllers');
const homeInfoPublic = require('../controllers/homeInfoPublic');
const homeSliderController = require('../controllers/homeSliderController');

// Página de clientes
router.get('/', homeInfoPublic.getHomeInfoPublic, homeSliderController.getHomeSlider, (req, res) => res.render('pages/index'));
router.get('/services', serviceController.getServices);
router.get('/contact', contactController.getContact);
router.get('/galeria', galeriaController.getGaleria);

module.exports = router;


