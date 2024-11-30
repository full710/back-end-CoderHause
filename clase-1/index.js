// tema 1

let mascota = "pata"
let mascotaEdad = 3 

// antes
console.log("Mi gato " + mascota + "tiene " + mascotaEdad + " años");

// despues

console.log(`Mi gato ${mascota} tiene ${mascotaEdad} años`);

// tema 2
// 1 paso - declaramos

// nombre = prompt("ingrese su nombre")
nombre = "Juan"
function saludar(nombre){
    console.log("Hola " + nombre + ", Bienvenido al curso de BackEnd. Esta es una función declarativa");
    
}

// 2 paso - llamar a la funcion

saludar(nombre)

// Funciones Anónimas

let nuevoSaludo = function(nombre) {
    console.log(`Hola ${nombre}, te saludo desde una función anónima`);
    
}
nuevoSaludo(nombre)

// Funciones Flecha

let ultimoSaludo = (nombre) => {
    console.log(`Hola ${nombre}, ahora te saludo desde una funcion flecha`);
}

ultimoSaludo(nombre)

// Scope
// Global : una variable global se puede utilizar en cualquier lado del programa
// Local : una variable local se puede utilizar en el bloque donde fueron declaradas

let global = "global"

const scope = () =>{
    console.log(`Estoy utilizando una variable ${global}`);
    let local = "local"
    console.log(`Estoy utilizando una variable ${local}`);
}

scope()

// Closures

function padre(){
    let variablePadre = "variablePadre"
    function anidada(){
        console.log(`estoy accediendo a la ${variablePadre}`);
    }

    return anidada
}

let closures = padre()
closures()

// Clases

class Personas{
    // implementamos una funcion constructora
    constructor (nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

let juan = new Personas("Juan Gonzalez", 28)
console.log(juan);
console.log(juan.nombre);
console.log(juan.edad);


