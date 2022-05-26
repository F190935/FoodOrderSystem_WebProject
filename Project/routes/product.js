const express = require('express');
const router = express.Router();
// Load User Controller
const productController = require('../controllers/product.controller')
const { forwardAuthenticated } = require('../config/auth');

router.post('/create', productController.create);

// router.get("/all", productController.find);

router.post("/update/:id", productController.update);


router.get('/delete/:id', productController.delete);

module.exports = router;
