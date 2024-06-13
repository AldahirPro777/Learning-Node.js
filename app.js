const express = require("express");

const app = express();

const port = 7777;

// conexión a base de datos
const mongoose = require("mongoose");

const user = "AldaPro";
const password = "VZdM5x486EDH3qnS";
const dbname = "veterinaria";

// Asegúrate de que tu URI de conexión es correcta y segura
const uri = `mongodb+srv://${user}:${password}@cluster0.vvtwvsq.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`;

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
