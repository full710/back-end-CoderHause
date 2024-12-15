// SERVIDORES WEB

// Temas
// 1)Que es un servidor web?
// 2)Protocopo HTTP
// 3)Modulo navito HTTP
// 4)Express JS
// 5)Objeto Request
// 6)Presentamos ejercicio del after

// Servidor web: Un servidor web es un software o hardware que almacena, procesa y
// entrega páginas web a los usuarios cuando lo solicitan a través de un navegador. 
// Funciona usando protocolos como HTTP y se encarga de enviar archivos como HTML,
// imágenes o videos para que el usuario pueda visualizar el sitio web.

// El protocolo HTTP (HyperText Transfer Protocol) es el estándar de comunicación 
// utilizado para transferir información en la World Wide Web. Permite que los navegadores 
// y servidores intercambien datos como páginas web, imágenes y otros recursos. 
// Funciona a través de solicitudes (requests) y respuestas (responses).

// Primer servidor: importamos el modulo http

// const http = require("http")

// // Segundo paso: creamos el servidor
// const server = http.createServer((request, response)=>{
//     console.log("request");
//     response.end("HOLA MUNDO")
// })

// Tercer paso: escuchar el servidor en un puerto de la computadora

const PUERTO = 8080

// server.listen(PUERTO, ()=>{
//     console.log(`Open with http://localhost:${PUERTO}`);
// })

// TRABAJAMOS CON EXPRESS

// 1)instalamos express npm i express

// 2)Importamos el modulo

const express = require("express")

// 3)Creamos aplicacion express

const app = express()

// 4)Creamos todas las rutas que necesitamos

app.get("/saludo", (req, res) => {
    res.send("Hola, bienvenido")
})
app.get("/producto", (req, res) => {
    res.send("Hola, estos son los productos")
})
app.get("/carrito", (req, res) => {
    res.send("Hola, este es tu carrito")
})

// Creamos nuestra ruta usuarios
const arrayPersonas = [
    {id: 1, nombre: "Pepe", apellido: "Argento", edad: 50},
    {id: 2, nombre: "Moni", apellido: "Argento", edad: 38},
    {id: 3, nombre: "Paola", apellido: "Argento", edad: 18},
    {id: 4, nombre: "Coki", apellido: "Argento", edad: 17},
    {id: 5, nombre: "Fatiga", apellido: "Argento", edad: 7},
]

app.get("/usuario", (req, res) => {
    res.send(arrayPersonas)
})

// Devolvemos por id

app.get("/usuario/:id", (req,res) => {
    // capturamos el id que viene en la url
    let id = parseInt(req.params.id)

    // buscamos que el id conincida en el array
    let usuarioBuscado = arrayPersonas.find(usuario => usuario.id === id)
    if(usuarioBuscado){
        res.send(usuarioBuscado)
    }else{
        res.send("El ID no corresponde a un usuario")
    }
})

// REQUEST QUERY
// Nos permiten realizar varias consultas a determinado endpoint

app.get("/clientes", (req,res) => {
    // let nombreCliente = req.query.nombre
    // let apellido = req.query.apellido

    let {nombre, apellido} = req.query

    res.send(`Bienvenido ${nombre} ${apellido}`)
})

// Ruta Raiz

app.get("/", (req,res) => {
    res.send("HOLA MUNDO")
})
// Ponemos a escuchar a la app

app.listen(PUERTO, () => {
    console.log(`Opern with http://localhost:${PUERTO}/`);
})
