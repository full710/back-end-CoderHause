const socket = io()

socket.emit("mensaje","Hola te estoy escribiendo desde el Front")
socket.on("saludo",(data)=>{
    console.log(data);
    
})
socket.on("usuarios",(data)=>{
    const listaUsuarios = document.getElementById("lista-usuarios")
    listaUsuarios.innerHTML = ""
    data.forEach(usuario =>{
        listaUsuarios.innerHTML += `<li>${usuario.nombre}  ${usuario.apellido}</li>`
    })
})