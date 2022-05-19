const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/", forwardAuthenticated, (req, res) =>
  res.render("welcome", { layout: "layouts/layout" })
);

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    user: req.user,
    layout: "layouts/layout"
  })
);

<<<<<<< HEAD
// Gallery
router.get("/gallery", ensureAuthenticated, (req, res) =>
  res.render("gallery", {
=======
// About
router.get("/about", ensureAuthenticated, (req, res) =>
  res.render("about", {
>>>>>>> 99591b0a283879b22fb5ed1acfe3d8abb6179a9e
    user: req.user,
    layout: "layouts/layout"
  })
);

<<<<<<< HEAD
// Dropdown1
router.get("/dropdown1", ensureAuthenticated, (req, res) =>
  res.render("dropdown1", {
=======
// Menu
router.get("/menu", ensureAuthenticated, (req, res) =>
  res.render("menu", {
>>>>>>> 99591b0a283879b22fb5ed1acfe3d8abb6179a9e
    user: req.user,
    layout: "layouts/layout"
  })
);

<<<<<<< HEAD
// Dropdown2
router.get("/dropdown2", ensureAuthenticated, (req, res) =>
  res.render("dropdown2", {
=======
// Specials
router.get("/specials", ensureAuthenticated, (req, res) =>
  res.render("specials", {
>>>>>>> 99591b0a283879b22fb5ed1acfe3d8abb6179a9e
    user: req.user,
    layout: "layouts/layout"
  })
);

<<<<<<< HEAD
// contact
router.get("/contact", ensureAuthenticated, (req, res) =>
  res.render("contact", {
=======
// Events
router.get("/events", ensureAuthenticated, (req, res) =>
  res.render("events", {
>>>>>>> 99591b0a283879b22fb5ed1acfe3d8abb6179a9e
    user: req.user,
    layout: "layouts/layout"
  })
);

<<<<<<< HEAD
// order
router.get("/order", ensureAuthenticated, (req, res) =>
  res.render("order", {
=======
// Chefs
router.get("/chefs", ensureAuthenticated, (req, res) =>
  res.render("chefs", {
>>>>>>> 99591b0a283879b22fb5ed1acfe3d8abb6179a9e
    user: req.user,
    layout: "layouts/layout"
  })
);

<<<<<<< HEAD
=======


>>>>>>> 99591b0a283879b22fb5ed1acfe3d8abb6179a9e
module.exports = router;
