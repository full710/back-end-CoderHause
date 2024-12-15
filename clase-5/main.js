// Temario

// File System
// Manejo de archio de forma sincronica
// Manejo de archivo con callback
// Manejo de archivo con promesas
// Manejo de datos complejos
// Desafio

// File system: es un manejador de archivos que ya viene incorporado con NODE JS.
// Me permite realizar operaciones de Crear, Leer, Actualizar, y borrar archivos. (CRUD)

// Como utilizamos fs?
// Utilizamos la importacion Common JS
// 1) importamos el modulo

const fs = require("fs")
// console.log(fs);

// Trabajo de forma sincronica

const ruta = "./ejemploa.txt"

// Crear un archivo:

fs.writeFileSync(ruta, "Hola estamos trabajando en un ejemplo sincronico")

// Leer un archivo:
// Verificamos que existe la ruta o el archivo
if(fs.existsSync(ruta)){
    let contenido = fs.readFileSync(ruta, "utf-8")
    console.log(contenido);
}else{
    console.log("La ruta del archivo no es existente");
}

// Actualizar contenidos

fs.writeFileSync(ruta, "Estamos actualizando la info")
fs.appendFileSync(ruta, ". Y aca agregando info al archivo")

if(fs.existsSync(ruta)){
    let contenido = fs.readFileSync(ruta, "utf-8")
    console.log(contenido);    
}else{
    console.log("Contenido no existente"); 
}

// Eliminar archivo

fs.unlinkSync(ruta) 

// TRABAJANDO CON CALLBACKS

const ruta2 = "./ejemplob.txt"

fs.writeFile(ruta2, "Archivo con callbacks", (error)=>{
    if(error) return console.log("no se pudo crear el archivo");

    fs.readFile(ruta2, "utf-8", (error, contenido)=>{
        if(error) return console.log("no se puede leer el archivo");
        console.log(contenido);
        
        fs.appendFile(ruta2, ". Agregando contenido", (error)=>{
            if(error) return console.log("No se pudo agregar contenido");

            fs.readFile(ruta2, "utf-8", (error, contenido)=>{
                if(error) return console.log("no se puede leer el archivo");
                console.log(contenido)
                
                fs.unlink(ruta2, (error)=>{
                    if(error) return console.log("no se pudo eliminar el archivo");
                    console.log("Archivo eliminado");
                    
                })
            })
        })
    })
})

// TRABAJANDO FS CON PROMESAS

// Crear archivo

const ruta3 = "./ejemploc.txt"

const operacionesAsync = async () =>{
    fs.promises.writeFile(ruta3, "Archivo creando con promesas")

    // Leer archivo

    const leerArchivo = await fs.promises.readFile(ruta3, "utf-8")
    console.log(leerArchivo);

    // Agregar contenido 

    await fs.promises.appendFile(ruta3, ". Agregamos al archivo")
    
    respuesta = await fs.promises.readFile(ruta3, "utf-8")
    console.log(respuesta);
    
    // Eliminar el archivo

    await fs.promises.unlink(ruta3)

}
operacionesAsync()

// MANEJO DE DATOS COMPLEJOS

const arrayPersonas = [
    {nombre: "Pepe", apellido: "Argento", edad: 50},
    {nombre: "Moni", apellido: "Argento", edad: 38},
    {nombre: "Paola", apellido: "Argento", edad: 18},
    {nombre: "Coki", apellido: "Argento", edad: 17},
    {nombre: "Fatiga", apellido: "Argento", edad: 7},
]

const archivoArgento = "./archivo-argento.json"

// ¿Como guardamos la informacion?

const guardarDatos = async () =>{
    await fs.promises.writeFile(archivoArgento, JSON.stringify(arrayPersonas,null,2))
}

guardarDatos()

// ¿Como leemos los datos?

const leerDatosArgento = async () => {
    let respuesta = await fs.promises.readFile(archivoArgento, "utf-8")
    const arrayNuevo = JSON.parse(respuesta)
    console.log(arrayNuevo);   
}

leerDatosArgento()