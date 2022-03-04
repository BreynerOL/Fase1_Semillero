40 // numero
false // boolean
[1,2] // object
{nombre : "lord"} // object
null // object
undefined // undefine

//////////////////////////////////////////////////////

var nombre = "victor"; // declarar e iniciar
var edad; // declarar
edad = 21; // inicializar
edad // invocar

var elementos = ["hello", 1]; // array

var persona =  {
    nombre: "victor", edad: 30
}

/////////////////////////////////////////////////////////

// funciones declarativas

function  SuperF(){
  return 5;
}

// funciones Expresion

var SuperF = function(){
  return a+b;
}
//////////////////////////////////////////////////////
 
var nombre2 = "victorM" // scope global

function saludar() {
  var apellido = "alzate"; // scope local
  return console.log("hola "+nombre2+ " " +apellido);  
}