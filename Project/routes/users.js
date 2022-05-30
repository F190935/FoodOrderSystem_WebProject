const express = require('express');
const router = express.Router();
// Load User Controller
const userController = require('../controllers/user.controller')
const adminController = require('../controllers/admin.controller')
const { forwardAuthenticated } = require('../config/auth');

//Register Routes
// Login Page
router.get('/login', forwardAuthenticated, userController.login);
// Register Page
router.get('/register', forwardAuthenticated, userController.register);

// Register
router.post('/register', userController.registerUser);

// Login
router.post('/login', userController.loginUser);

// Logout
router.get('/logout', userController.logout);

//admin Login Page
router.get('/admin_Login', forwardAuthenticated, adminController.login);
//admin Register Page
router.get('/admin_Register', forwardAuthenticated, adminController.register);

//admin Register
router.post('/admin_Register', adminController.registerUser);

//admin Login
router.post('/admin_Login', adminController.loginUser);

module.exports = router;
