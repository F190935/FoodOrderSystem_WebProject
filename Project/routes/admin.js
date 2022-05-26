const express = require("express");
const Product = require("../models/addProduct");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

router.get("/addProduct", (req, res) => {
  res.render("adminUI/addProduct", {
    user: req.user,
    layout: "layouts/Layout",
  });
});

router.get("/admin", (req, res) => {
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

router.get("/update_product", (req, res) => {
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

module.exports = router;
