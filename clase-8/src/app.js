import express from "express"
const app = express()
const PUERTO = 8080

import mascotasRouter from "./routes/mascotas.router.js"
import usuariosRouter from "./routes/usuarios.router.js"

// Ejercicio veterinaria

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended : true}))
// me permite tomar datos complejos: varias querys y datos de formularios

// routes

app.use("/api/mascotas", mascotasRouter)
app.use("/api/users", usuariosRouter)
// Listen

app.listen(PUERTO, ()=>{
    console.log(`Open with http://localhost:${PUERTO}`);
})

// Servicios estaticos

// app.use(express.static("public"))

// Podemos agregarle un prefijo virtual:

app.use("/static", express.static("public"))
