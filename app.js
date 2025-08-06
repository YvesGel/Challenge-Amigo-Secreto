// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];
// Funcion de limpiar la caja de texto
function limpiarCampo(){
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}
// Funcion para añadir amigos
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre != ""){
        amigos.push(nombre);
        limpiarCampo();
        actualizarAmigos();
    }
    else{
        alert("Por favor, inserte un nombre.");
    }
}
// Funcion para actualizar la lista de amigos
function actualizarAmigos(){
    let lista_amigos = document.getElementById("listaAmigos");
    let elementos_lista = [];
    lista_amigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        elementos_lista.push(`<li>${amigos[i]}</li>`);
    }
    lista_amigos.innerHTML = elementos_lista.join("");
}
// Funcion para sortear la lista de amigos
function sortearAmigo(){
    let nombre_aleatorio;
    if (amigos.length === 0){
        alert("La lista de amigos esta vacía.")
    }
    else{
        let maximo = amigos.length;
        let indice = Math.floor(Math.random()*maximo);
        let nombre_aleatorio = amigos[indice];
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${nombre_aleatorio}`;
    }
}
