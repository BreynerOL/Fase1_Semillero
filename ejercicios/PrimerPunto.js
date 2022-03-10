/*1. Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
Haz una función que devuelva una lista con todas las ovejas que sean de color
rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden,
las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:
*/
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function FiltroOvejas(array) {

  let ovejasRojas = [];
  let ovejasDifinitivas = [];

  array.forEach(i => {
   if (i.color === "rojo") {
      ovejasRojas=[...ovejasRojas,i];
   }
  });

  ovejasRojas.forEach(i => {
    if (i.name.toLowerCase().includes("n") && i.name.toLowerCase().includes("a")) {
      ovejasDifinitivas.push(i)
    }
  });

  return ovejasDifinitivas;
}

let result = FiltroOvejas(ovejas);

console.log(result);