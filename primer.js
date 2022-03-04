var juego = "piedra";
var jugador = prompt("Ingresa piedra, papel o tijera");
jugador.toLowerCase();
var opciones = ["piedra", "papel", "tijera"];
var maquina = opciones[parseInt(Math.random() * 3)];
console.log(maquina + " Maquina");
var opcion = 0;
if(jugador===maquina){
opcion = 3
}else if(((jugador === "piedra")&&(maquina=== "tijera"))||((jugador === "papel")&& (maquina==="piedra"))||((jugador === "tijera")&& (maquina==="papel"))){
    opcion=1;
}else{
    opcion = 2;
}
switch(opcion){
    case 1: console.log("Gana jugador");
    break;
    case 2: console.log("Gana Maquina");
    break;
    case 3: console.log("Empate");
    break;
    default: console.log("Muy pirobo");
}