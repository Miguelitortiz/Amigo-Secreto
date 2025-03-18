@@ -1,4 +1,5 @@
 let amigos = []; //Almacena los nombres de los amigos
 let nombresAmigos = []; //Almacena los nombres de los amigos
 let listaAmigos = document.getElementById("listaAmigos");
 
 function agregarAmigo(){
     let nombreAmigo = document.getElementById("amigo").value; //Obtiene el input del nombre del amigo
 @@ -7,21 +8,30 @@ function agregarAmigo(){
     if (nombreAmigo == ""){
         alert("Debes ingresar un nombre");
     } else {
         amigos.push(nombreAmigo);
         nombresAmigos.push(nombreAmigo);
     }
 
     //Limpiar espacio
     document.querySelector("#amigo").value = ""; 
     recorrerArray();
     mostrarAmigos();
 }
 
 function recorrerArray(){
     let lista = document.getElementById("listaAmigos");
     lista.innerHTML = ""; //Borra el contenido de la lista
 function mostrarAmigos(){
     listaAmigos.innerHTML = ""; //Borra el contenido de la lista
     //Recorre el array de amigos
     for ( let i = 0; i<amigos.length; i++){
     for ( let i = 0; i<nombresAmigos.length; i++){
         let item = document.createElement("li"); //Crea un elemento li
         item.textContent = amigos[i]; //Asigna el texto del item
         lista.appendChild(item); //Agrega el item a la lista
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
