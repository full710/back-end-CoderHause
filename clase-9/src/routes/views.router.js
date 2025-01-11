import { Router } from "express";
const router = Router();

const productos = [
    {nombre: "Fideos", precio: 600},
    {nombre: "Huevos", precio: 300},
    {nombre: "Arroz", precio: 400},
    {nombre: "Crema", precio: 550},
    {nombre: "Coca-cola", precio: 600}
]

router.get("/", (req, res) => {
  const usuario = {
    nombre: "Juan",
    apellido: "Gonzalez",
    mayorEdad: true,
  };
  res.render("index", { usuario, productos });
});

// Preguntas frecuentes
router.get("/preguntas-frecuentes", (req, res) => {
  res.render("preguntas");
});
// Contacto
router.get("/contacto", (req, res) => {
  res.render("contacto");
});
export default router;
