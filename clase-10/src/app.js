import express from "express"
import multer from "multer"
import { engine } from "express-handlebars"
import { Server } from "socket.io"
import viewsRouter from "./routes/views.router.js"

const app = express()
const PUERTO = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static("./src/public"))

app.engine("handlebars", engine());
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/", viewsRouter)

// Que es websockets?
// Es un protocolo de comunicacion basado en TCP para poder establecer esa conexion cliente y el servidor, justo como sabemos, es el mismo objetivo que cubre HTTP
// Es bidireccional en tiempo real. Como por ejemplo un chat
// Como funciona?
// 1 - El cliente tiene que enviar una peticion HTTP al servidor, esto se conoce como apreton de manos
// 2 - El servicor recibe la peticion y responde, esto se conoce como "abrir la conexion"
// 3 - Se genera una conexion bidireccionar hasta que uno de los dos corte la conexion
// Socket.io

const httpServer = app.listen(PUERTO, () => console.log(`Escuchando en el ${PUERTO}`));
const io = new Server(httpServer) 

const usuarios = [
    {id:1, nombre:"Juan", apellido:"Gonzalez"},
    {id:2, nombre:"Mariano", apellido:"Gianetti"},
    {id:3, nombre:"Luis", apellido:"Picard"}
]


io.on("connection",(socket) => {
    console.log("Se conecto un cliente");
    socket.on("mensaje",(data)=>{
        console.log(data);
        
    })

    socket.emit("saludo","Hola, escribiendo desde el back")
    socket.emit("usuarios",usuarios);
    
})