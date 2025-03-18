let nombresAmigos = []; //Almacena los nombres de los amigos
let listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value; //Obtiene el input del nombre del amigo

    //Validación casilla vacía
    if (nombreAmigo == ""){
        alert("Debes ingresar un nombre");
    } else {
        nombresAmigos.push(nombreAmigo);
    }

    //Limpiar espacio
    document.querySelector("#amigo").value = ""; 
    mostrarAmigos();
}

function mostrarAmigos(){
    listaAmigos.innerHTML = ""; //Borra el contenido de la lista
    //Recorre el array de amigos
    for ( let i = 0; i<nombresAmigos.length; i++){
        let item = document.createElement("li"); //Crea un elemento li
        item.textContent = nombresAmigos[i]; //Asigna el texto del item
        listaAmigos.appendChild(item); //Agrega el item a la lista
    }
}

function sortearAmigo(){
    if (nombresAmigos.length == 0){
        alert("No hay amigos para sortear");
    } else {
        let amigoSorteado = nombresAmigos[Math.floor(Math.random() *nombresAmigos.length)];
        listaAmigos.innerHTML=""; 
        document.getElementById("resultado").textContent = "El amigo sorteado es: " + amigoSorteado;
    }
}