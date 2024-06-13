const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("mascotas", {
    arrayMascotas: [
      { id: "1", nombre: "rex", descripcion: "rex descripcion" },
      { id: "2", nombre: "chanchan", descripcion: "chanchan descripcion" },
      { id: "3", nombre: "bella", descripcion: "bella descripcion" },
      { id: "4", nombre: "toby", descripcion: "toby descripcion" },
      { id: "5", nombre: "luna", descripcion: "luna descripcion" },
      { id: "6", nombre: "manchas", descripcion: "manchas descripcion" },
      { id: "7", nombre: "pelusa", descripcion: "pelusa descripcion" },
    ],
  });
});

module.exports = router;
