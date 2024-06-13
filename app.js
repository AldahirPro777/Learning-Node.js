const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 7777;

// conexión a base de datos
const mongoose = require("mongoose");

// Asegúrate de que tu URI de conexión es correcta y segura
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.vvtwvsq.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(uri, {
    // Aquí usamos la variable uri
    // Otras opciones si son necesarias
  })
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((e) => {
    console.error("Error al conectar a la base de datos", e);
  });

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
