// Modulos: archivo de js que contiene un conjunto de funciones y nos permiten resolver una tarea en particular
// Modulos escritos por uno mismo
// Existon dos formas de trabajar con modulos en Node JS
// Common js y ES modules

// Importamos con Common:

// const saludos = require("./saludos.js")

// saludos.temprano()
// saludos.tarde()
// saludos.noche()

// Como creamos un package.json?
// npm init --yes

import {temprano,tarde,noche} from "./saludos.js"
temprano()
tarde()
noche()

console.log("Hola");
