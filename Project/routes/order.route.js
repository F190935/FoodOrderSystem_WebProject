const express = require('express');
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');
const router = express.Router();
const orderController = require('../controllers/order.controller')

router.post('/orders', orderController.order);

router.get('/display_order', ensureAuthenticated, orderController.orders)

router.get('/updateOrder', orderController.update)

router.get('/delete/:id', orderController.delete);

router.post('/update/:id', orderController.updateOrder)

module.exports = router;
