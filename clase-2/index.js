// Desestructuracion

const pelicula = {
    titulo : "El padrino",
    genero : "Drama",
    lanzamiento : "1972"
}

let tituloPelicula = pelicula.titulo
console.log(`El titulo de la pelicula es ${tituloPelicula}`);

const {titulo, genero, lanzamiento} = pelicula
console.log(`Titulo: ${titulo}\nGenero: ${genero}\nLanzamiento: ${lanzamiento}`);

// Valor por defecto

const porDefecto = (nombre = "invitado")=>{
    console.log(`Hola ${nombre}`);
}

porDefecto("Juan")
porDefecto()

// Modulos
// Exportar datos de datos.js
// Agregamos type="module" en el scrip de js en html
import productosMarolio from "./datos.js"

console.log(productosMarolio);

// Clases y objetos

class Persona {
    // constructor de objetos
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    // metodo
    saludo(){
        console.log(`Hola, soy ${this.nombre}`);
        
    }
}

const personaUno = new Persona("Juan", "Gonzalez", 28)

const {nombre, apellido, edad} = personaUno
console.log(`Nombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}`)
// utilizamos el metodo
personaUno.saludo()

// Herencia
class Estudiante extends Persona{
    // se utiliza # para que una variable sea privada
    #promedio
    constructor(nombre, apellido, edad, carrera, promedio){
        super(nombre, apellido,edad)
        this.carrera = carrera
        // variable privada
        this.#promedio = promedio
    }
    // metodo para acceder a una variable privada
    get getPromedio(){
        return this.#promedio
    }
}

const estudianteUno = new Estudiante("Ignacio", "Gonzalez", 28, "Programacion", 8)
console.log(estudianteUno);
estudianteUno.saludo()
console.log(estudianteUno.promedio);

// utilizamos el metodo para ver una variable privada
console.log(estudianteUno.getPromedio);

// Variables y metodos estaticos

class Contador{
    static cantidad = 0

    constructor(){
        Contador.cantidad++
    }
    static obtenerCantidad(){
        return Contador.cantidad
    }
}
// suma uno al contador
const contador1 = new Contador()
console.log(Contador.obtenerCantidad());

// sumamos dos mas al contador
const contador2 = new Contador()
const contador3 = new Contador()

console.log(Contador.obtenerCantidad());

// Operador exponente
// antes

let base = 4
let exponente = 3

let resultado = Math.pow(base, exponente)
console.log(resultado);

// ahora

let resultado2 = base ** exponente
console.log(resultado2);

// Includes
// antes

const losSimpsons = ["Homero", "Bart", "Marge", "Lisa", "Maggie"]
console.log(losSimpsons.indexOf("Maggie") > -1) 
// Si el indexoff existe devuelve true

// ahora 
console.log(losSimpsons.includes("Maggie"));
// Devuelve true o false si existe o no el parametro indicado

// Objetc.values

const empleado = {
    nombre: "Pepe",
    apellido: "Argento",
    edad: "45",
    puesto: "Vendedor de zapatos"
}

// objetc.values devuelve un array con los valores de las propiedades del objeto

const resultadoEmpleadoValues = Object.values(empleado)
console.log(resultadoEmpleadoValues);

// Objetc.entries

const resultadoEmpleadoEntries = Object.entries(empleado)
console.log(resultadoEmpleadoEntries);

// Object.keys

const resultadoEmpleadoKeys = Object.keys(empleado)
console.log(resultadoEmpleadoKeys);







