const express = require("express");

const app = express();

const port = 7777;

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Pagina principal
app.use(express.static(__dirname + "/public"));

app.use('/',require('./router/routersWeb'));

app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo : 404,
        kindError : "404",
        descripcion : "Titulo del sitio web"
    });
})

app.listen(port, () => {
  console.log("Hello World al puerto", port);
});
