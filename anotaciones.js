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

