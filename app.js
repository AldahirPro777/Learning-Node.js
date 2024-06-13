const express = require("express");

const app = express();

const port = 7777;

// Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Pagina principal
app.use(express.static(__dirname + "/public"));

// Rutas web
app.use("/", require("./router/RutasWeb"));
app.use("/mascotas", require("./router/Mascotas"));

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: 404,
    tituloWeb: 404,
    kindError: "404",
    descripcion: "Titulo del sitio web",
  });
});

app.listen(port, () => {
  console.log("Hello World al puerto", port);
});
