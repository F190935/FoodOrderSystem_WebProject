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

// About
router.get("/about", ensureAuthenticated, (req, res) =>
  res.render("about", {
    user: req.user,
    layout: "layouts/layout"
  })
);

// Menu
router.get("/menu", ensureAuthenticated, (req, res) =>
  res.render("menu", {
    user: req.user,
    layout: "layouts/layout"
  })
);

// Specials
router.get("/specials", ensureAuthenticated, (req, res) =>
  res.render("specials", {
    user: req.user,
    layout: "layouts/layout"
  })
);

// Events
router.get("/events", ensureAuthenticated, (req, res) =>
  res.render("events", {
    user: req.user,
    layout: "layouts/layout"
  })
);

// Chefs
router.get("/chefs", ensureAuthenticated, (req, res) =>
  res.render("chefs", {
    user: req.user,
    layout: "layouts/layout"
  })
);



module.exports = router;
