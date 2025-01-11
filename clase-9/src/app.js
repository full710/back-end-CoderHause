// Clase 9 - Motores de plantillas
import viewsRouter from "./routes/views.router.js"
import express from "express";
import multer from "multer"
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

// Practicamos Multer
// Creamos ruta para cargar una imagen desde postman
const storage = multer.diskStorage({
    destination: (req, res, cb) =>{
        cb(null, "./src/public/img")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage})
app.post("/upload",upload.single("imagen"), (req,res) => {
    res.send("imagen cargada")
})
// Listen
app.listen(PUERTO, () => console.log(`Escuchando en el ${PUERTO}`));
