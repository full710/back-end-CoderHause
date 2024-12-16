// Temas de la clase

// 1)Codigos de estado
// 2)¿Que es una API?
// 3)API Rest
// 4)Metodos de peticion
// 5)Postman
// 6)Practicamos GET - POST - PUT - DELETE

// 1) ODIGOS DE ESTADO: Cada vez que hacemos una peticion al servidor, este no solamente
// nos responde con informacion, tambien nos puede informar el "estado de la peticion",
// por medio de estos numeros de 3 cifras

// 2) Una API (del inglés Application Programming Interface) es un conjunto de reglas y 
// definiciones que permite que diferentes aplicaciones o sistemas se comuniquen entre sí.
// Funciona como un intermediario que facilita el intercambio de datos y funcionalidades.

// 3) Una API REST (o API RESTful) es un tipo de API que sigue los principios de diseño REST 
// (Representational State Transfer). Se basa en el protocolo HTTP para permitir la comunicación 
// entre sistemas de manera simple y eficiente.

// 4) Los métodos de petición HTTP (también conocidos como verbos HTTP) son acciones que se 
// usan en las solicitudes para interactuar con recursos en una API o servidor web. Cada método 
// tiene una función específica. 

// GET - POST - PUT -DELETE

// Importamos express

import express from "express";

const app = express();
const PUERTO = 8080;

// MIDDLEWARE
// Un middleware en el contexto de desarrollo web es una función que se ejecuta durante el 
// ciclo de solicitud-respuesta de una aplicación. Actúa como una capa intermedia que puede 
// modificar, procesar o detener una solicitud antes de llegar a la ruta final o enviar 
// una respuesta al cliente.

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Rutas

app.get("/", (req,res) => {
    res.send("HOLA MUNDO")
})

// Armamos un sistema de gestion de clientes

const clientes = [
    {id: "1", nombre: "Lionel", apellido: "Messi"},
    {id: "2", nombre: "Cristiano", apellido: "Ronaldo"},
    {id: "3", nombre: "Roman", apellido: "Riquelme"}
]

// 1) Creamos ruta que llama a todos los clientes

app.get("/clientes", (req,res) => {
    res.send(clientes)
})

// 2) Creamos ruta que llame a un cliente con un id dinamico

app.get("/clientes/:id",(req,res) => {
    let id = req.params.id;
    const cliente = clientes.find(cliente => cliente.id === id)
    if(cliente){
        return res.send(cliente)
    }else{
        return res.send("Cliente no encontrado")
    }
})

// 3) Creamos una ruta POST para almacenar un nuevo cliente

app.post("/clientes",(req,res) => {
    const newCliente = req.body
    clientes.push(newCliente)
    console.log(clientes);
    res.send("Cliente creado")
    
})

// Listen
app.listen(PUERTO, () =>{
    console.log(`Open with http://localhost:${PUERTO}`);
    
})