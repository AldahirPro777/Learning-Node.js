const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    tituloWeb: "Main",
    titulo: "Main",
  });
});

router.get("/servicios", (req, res) => {
  res.render("servicios", {
    tituloWeb: "Servicios",
    tituloServicios: "Este es un mensaje dinamico de servicios",
  });
});

module.exports = router;
