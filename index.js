import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";

// Crear app
const app = express();

// Habilitar req.body
app.use(express.urlencoded({ extended: true }));

// Connect database
try {
  db.authenticate();
  db.sync();
} catch (err) {
  console.log(err);
}

//Habilitar pug
app.set("view engine", "pug");
app.set("views", "./views");

//Create static folder
app.use(express.static("public"));

const port = 3000;

app.use("/auth", usuarioRoutes);

// Escuchar el en puerto
app.listen(port, () => {});
