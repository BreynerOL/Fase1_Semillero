/*3. Dado un arreglo de palabras, determina si los elementos dentro de los ()
de dicho arreglo son válidos o no acorde al siguiente ejemplo:

"bici coche (balón) bici coche peluche" // -> OK
"(muñeca) consola bici" // -> OK

"bici coche (balón bici coche" // -> FAIL
"peluche (bici [coche) bici coche balón" // -> FAIL
"(peluche {) bici" // -> FAIL
"() bici" // -> FAIL

Los () no pueden estar vacíos, deben siempre abrir y cerrar paréntesis,
no puede haber caracteres especiales dentro de los paréntesis;
la presentación de los resultados es libre
*/

let string ="(muñeca) consola bici";
let resultado = true;

 
let inicio = string.indexOf("(");
let final = string.indexOf(")");

let cadena = string.substring(inicio+1, final) // ya tenemos lo de adentro de los ()
//console.log(cadena);
// primer requisito! ver si esta vacia
if (cadena === "") {
  resultado = false;
}

// segundo requisito! ver si tiene caracteres especiales
// 48 - 57 son numeros en ascii
// 65 - 90 son letras mayusculas
// 97 - 122 son letras minusculas
for (const i in cadena) {
  let x = cadena.charAt(i).charCodeAt() 

  if (x < 48) {
    resultado = false;
  }

  if (x > 57 && x < 65) {
    resultado = false;
  }

  if (x > 90 && x < 97) {
    resultado = false;
  }

  if (x > 122 ) {
    resultado = false
  }

  if (x > 230 && x < 260) {
    resultado = true;
  }
}

// tercer requisito no debe tener mas de una palabra
let list = cadena.split(" ");
if (list.length > 1) {
  resultado = false;
}

console.log("This result is", resultado);


// for (let i = 0; i < 500; i++) {
//    console.log(String.fromCharCode(i), i); 
// }