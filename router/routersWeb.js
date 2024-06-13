const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    titulo: "Main",
  });
});

router.get("/servicios", (req, res) => {
  res.render("servicios", {
    titulo: "Servicios",
    tituloServicios: "Este es un mensaje dinamico de servicios",
  });
});

/* 
router.get("/mascotas", (req, res) => {
    res.render("servicios", {
        titulo : "Mascotas"
    });
}); */

module.exports = router;
