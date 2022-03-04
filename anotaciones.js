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
    nombre: "victor", edad: 30 // objeto
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

////////////////////////////////////////

var a = "50";
var b = Number(a);
var c = a * 2;

console.log(typeof a)
console.log(typeof b) // Coerción explicita
console.log(typeof c)// Coerción implícita

/////////////////////////////////////////////////////////

//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también
Boolean(-1); // true independientemente si hay un numero positivo o negativo
Boolean(true) // true obviamente

/////////////////////////////////////////////////////////////

/*
=	operador de asignacion
==	igual que
===	estrictamente igual que
>, >= mayor o mayor igual que
<, <=	menor o menor igual que
!=, !==, diferente que o diferente que (estricto)
+	operador suma y ademas se utiliza para concatener dos cadenas de texto.
-	operador resta
*	operador de multicacion
/	operador de division
%	operador de modulo
**	operador de potenciacion

!	NOT // niega un valor
&&	// AND
||	// OR

++ adiciona una unidad
-- decreenta una unidad


*/

///////////////////////////////////////////////////////////////////////////////

// condicionales
var a = 3;
var b = 2;

if (a > b) {
  console.log("es mayor")
}
/////
function PoderVotar(edad) {
  if (edad === 18) {
    console.log("Puedes votar por primera vez :3")
  } else if (edad > 18) {
    console.log("Puedes votar again");
  } else {
    console.log("No puedes votar :(");
  }
}

var resultado = edad === 18 ? "tiene 18" : "no tiene 18" // condicional de una linea :)
console.log(resultado);

///////////////////////////////////////////////////////////////////

// adicional 

var h = Math.round(Math.random() *1 ); // numero aleatorio de 0 a 1
var pregunta = prompt("Ingresa tu opción: ");  // JoptionPanel de jv
var user = pregunta.toLowerCase(); // minusculas
///////////////////////////////////////////////////////////

// switch
var nombre = "carlos";

switch (nombre==="carlos") {
  case (true):
    console.log("hi");
  case (nombre = "carlos"):
    console.log(" "+nombre+" ");
    break; // rompe la secuencia
  default:
    console.log("good bye"); 
}

var key = 'a';
switch (key) {
  case 'a':
    console.log("is a");
    break;
  case 'b':
    console.log("is b");
  case 'c':
    console.log("is c");
  default:
    console.log("is none");
    break;
}
///////////////////////////////////////////////////////////////////

// for
var numeros =[1,2,3,4,5];

for (var i=0; i<numeros.length; i++){
  console.log(numeros[i]);
}
  
for (var i of numeros){
  console.log(i);
}

///////////////////////////////////////////////////////////////
// while

 var estudiantes = ["juan", "carlos", "victor", "pablo"];

 while (estudiantes.length > 0) {
   console.log("hey "+estudiantes[0]);
   estudiantes.shift();
 }

//////////////////////////////////////////////////////////

// objetos

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  detalles: function (){
    console.log("Auto "+this.marca+" "+this.modelo);
  }
}

function auto(marca, modelo, anio) {
  this.marca=marca;
  this.modelo=modelo;
  this.anio=anio;
}

var autoNuevo = new auto("testal","2022txd", "2022");
/////////////////////////////////////////////////////////////////////

// filtros de objetos

var articulos = [
  {nombre: "pc", precio: 500},
  {nombre: "teclado", precio: 900},
  {nombre: "mouse", precio: 100}
];

var filtro = articulos.filter(function(a) {
  return a.precio>=500;
});

// mapeo de objetos

var mapeado = articulos.map(function(a) {
  return a.nombre;
});

// encontrar objeto
var encontrar = articulos.find(function(a) {
  return a.nombre === "teclado";
});

// existencia de objetos

var existeArticulo = articulos.some(function(a) {
  return a.precio <=100;
});

// foreach

articulos.forEach(function(a) {
  console.log(a.nombre);
})

articulos.push(
 {nombre: "pantalla", precio: 200},
 {nombre: "audifonos", precio: 300}
);

var numeros3 = [1,2,3,4,5];
numeros3.pop();