const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");


require("dotenv").config();

//crear el servidor de express

const app = express();

dbConnection();

//corse
app.use(cors());

//directorio publico

app.use(express.static("public"));

//lectura y parceo de body

app.use(express.json());

//rutas

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//TODO: CRUD//  eventos

//escuchar peticiones

app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});
