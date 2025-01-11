// Clase 9 - Motores de plantillas
import viewsRouter from "./routes/views.router.js"
import express from "express";
const app = express();
const PUERTO = 8080;

// 1) Importamos el metodo del motor de plantilla
import { engine } from "express-handlebars";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"))

// Configuramos el motor de plantilla
app.engine("handlebars", engine());
// Registramos handlebars a "expres-handlebars" como motor de plantillas para express. 
// El primer argumento es la extencion del archivo y el segundo es el metodo del motor
app.set("view engine", "handlebars")
// Establecemos a "express-handlebars" como motor predeterminado
app.set("views", "./src/views")

// Rutas
app.use("/", viewsRouter)

// Listen
app.listen(PUERTO, () => console.log(`Escuchando en el ${PUERTO}`));
