import { Router } from "express"
const usuariosRouter = Router()
const usuarios = []

usuariosRouter.get("/",(req,res) => {
    res.send(usuarios)
})

usuariosRouter.post("/", (req,res) => {
    const crearUsuario = req.body
    usuarios.push(crearUsuario)
    res.send({status:"success", mensaje:"Usuario creado correctamente"})
})

export default usuariosRouter