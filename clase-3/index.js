// Programacion sincronica
// Es un enfoque en el que las tareas se ejecutan secuencialmente

console.log("primero");
console.log("segundo");
console.log("tercero");
console.log("todas se ejecutan en orden, y cada una se ejecuta cuando termina la anterior");

// ejemplo con funciones

function a(){
    console.log("funcion 1");
    b()
}
function b(){
    console.log("funcion 2");
    c()
}
function c (){
    console.log("funcion 3");
    
}

a()

// Programacion asincronica
// Es una forma de programar en el que las tareas se ejecutan en segundo plano y no rompen el flujo del programa

setTimeout(()=>{
    console.log("primer tarea");
    
}, 3000)
console.log("segunda tarea");

// Función de orden superior: Se refiere a la función que acepta otra función como argumento o devuelve una función.
// Callback: Es la función que se pasa como argumento y que será invocada dentro de otra función (que podría ser una de orden superior).

// Ejemplo de callback

function suma(numA, numB, callback){
    let resultado = numA + numB
    callback(resultado)
}

function mostrarResultado(resultado){
    console.log("el resultado de la suma es " + resultado);
}

suma(9,10,mostrarResultado)

// Ejemplo map con callback

let numeros = [1,2,3,4,5]
console.log(numeros);


let numerosDuplicados = numeros.map((numero)=> numero * 2 )
console.log(numerosDuplicados);

// Creamos metodo propio map

function mapCasero(array, callback){
    let nuevoArray = []
    for(let i = 0; i < array.length; i++){
        nuevoArray.push(callback(array[i]))
    }
    return nuevoArray
}

function duplicar(numeroMap){
    return numeroMap * 2
}

console.log(mapCasero(numeros, duplicar));

// Promesas
// Las promesas son objetos que representan un hecho eventual a futuro
// Las vamos a utilizar para operaciones asincronicas que pueden resultar exitosas o fallidas

// Tienen 3 estados
// Pendiente (pending): estado inicial de la promesa, la operacion no se completo ni rechazo
// Exitoso (fulfilled): operacion completada de manera exitoso, se resuelve la promesa
// Fallida (rejected): operacion fallida, se rechaza la promesa

const promesa = new Promise((resolve, rejected)=>{
    resolve("Exito en la promesa")

})
console.log(promesa);

const promesa1 = new Promise((resolve, rejected)=>{
    rejected("Error en la promesa")
})

// Metodos then / catch
// Permiten manejar el estado de la promesa y van concatenados
// Then: se usa cuando se resuelve la promesa
// Catch: se usa cuando se rechaza la promesa
// Finally: se usa siempre,se resuelva o rechace la promesa

promesa
    .then(()=> console.log("Promesa exitosa"))
    .catch(()=>console.log("Promesa rechazada"))
    .finally(()=>console.log("Se ejecusa siempre"))

promesa1
.then(()=> console.log("Promesa exitosa"))
.catch(()=>console.log("Promesa rechazada"))
.finally(()=>console.log("Se ejecusa siempre"))

// Ejemplo con productos

const productos = [
    {id: 1, nombre: "Mesa", precio: 5000},
    {id: 2, nombre: "Silla", precio: 1500},
    {id: 3, nombre: "Vino", precio:300}
]

function buscarProductosPorId(id){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            const producto = productos.find( producto => producto.id === id)
            if(producto){
                resolve(producto)
            }else{
                rejected("El producto no existe en la base de datos")
            }
        },3000)

    })
}

buscarProductosPorId(2)
    .then((producto)=>console.log(producto))
    .catch((error)=>console.log(error))

buscarProductosPorId(4)
    .then((producto)=>console.log(producto))
    .catch((error)=>console.log(error))

// Async Await
// Await genera una pausa hasta que  la promesa se resuelva o rechace

function buscarProductosPorIdDos(id){
    const producto = buscarProductosPorId(id)
    console.log(producto);
}
buscarProductosPorIdDos(2)
// Esta funcion queda en pendiente ya que es sincronica

async function buscarProductosPorIdTres(id) {
    const producto = await buscarProductosPorId(id)
    console.log(producto);
}
buscarProductosPorIdTres(3)
// Al usar una funcion asincronica y la funcion await, la promesa espera a ser resolvida o rechazada para ejecutarse

// Generalmente se utiliza en un bloque try catch

async function buscarProductosPorIdTryCatch(id) {
    try {
        const producto = await buscarProductosPorId(id)
        console.log(producto);
    } catch (error) {
        console.log(error);  
    }
}

buscarProductosPorIdTryCatch(1)
buscarProductosPorIdTryCatch(5)

// Consultas en Api's (jasonplaceholder.typicode.com)
// Then Catch
fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json())
    .then(usuarios => console.log(usuarios))
    .catch(error => console.log("tenemos un error", error))

// Async Await

async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    const usuarios = await respuesta.json()
    console.log(usuarios);
    
}
obtenerUsuarios()

// Try Catch
async function obtenerUsuariosTC() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        const usuarios = await respuesta.json()
        console.log(usuarios);
    } catch (error) {
        console.log("Error al conectar con el servidor", error);
    }
}
obtenerUsuariosTC()