import { Router } from "express"
const mascotasRouter  = Router()
const mascotas = []

mascotasRouter.get("/", (req,res) => {
    res.send(mascotas)
})

mascotasRouter.post("/", (req,res) => {
    const nuevaMascota = req.body
    mascotas.push(nuevaMascota)
    res.send({status:"succes", mensaje:"Nueva mascota agregada"})
})

export default mascotasRouter