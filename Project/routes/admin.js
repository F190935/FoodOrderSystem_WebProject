const express = require("express");
const Product = require("../models/addProduct");
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

router.get("/addProduct", (req, res) => {
  res.render("adminUI/addProduct", {
    user: req.user,
    layout: "layouts/Layout",
  });
});

router.get("/admin", ensureAuthenticated, (req, res) => {
  Product.find({}, function (err, prod) {
    if (err) {
      console.log(err);
    }
    res.render("adminUI/admin", {
      user: req.user,
      prod,
      layout: "layouts/Layout",
    });
  });
});

router.get("/update_product", ensureAuthenticated, (req, res) => {
  Product.findById(req.query.id, function (err, prod) {
    if (err) {
      console.log(err);
    }
    res.render("adminUI/update_product", {
      user: req.user,
      prod,
      layout: "layouts/Layout",
    });
  });
});

//admin Login Page
router.get('/admin_Login', forwardAuthenticated, adminController.login);
//admin Register Page
router.get('/admin_Register', forwardAuthenticated, adminController.register);

//admin Register
router.post('/admin_Register', adminController.registerUser);

//admin Login
router.post('/admin_Login', adminController.loginUser);

module.exports = router;
