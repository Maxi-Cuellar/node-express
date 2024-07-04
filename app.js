const express = require("express");
const app = express();
const port = 3030

app.get("/", (req,res) => res.send("HOME"))

app.listen(port, () => console.log("Se inicio sesion en el puerto " + port));

/* hola */