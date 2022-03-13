/*2. Dada una lista de elementos dentro de una cadena de texto 

let data = 'bici coche balón _playstation bici coche peluche'

obtenga un json con el número de veces que se repite un elemento mientras
este elemento no posea caracteres especiales en su texto, tome como ejemplo que
_playstation no aparece en el json resultante:

{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}


*/

// 48 - 57 son numeros en ascii
// 65 - 90 son letras mayusculas
// 97 -122 son letras minusculas

let data = 'bici coche balón _playstation bici coche peluche 2versiones @hello @hello lol !jii ultimo'
let list = data.split(" ")
let json = {}
let aux = []

list.forEach(i => {
  if (i.charCodeAt(0) > 48 && i.charCodeAt(0) < 57) { // numeros
    json[i] = 1 
  }
  if (i.charCodeAt(0) > 65 && i.charCodeAt(0) < 90) { // mayusculas
    json[i] = 1
  }
  if (i.charCodeAt(0) > 97 && i.charCodeAt(0) < 122) { // minusculas
    json[i] = 1
  }
});


 list.forEach(i => {
   if (aux.includes(i)) {
    if (i.charCodeAt(0) > 48 && i.charCodeAt(0) < 57) { // numeros
      json[i] += 1;
    }
    if (i.charCodeAt(0) > 65 && i.charCodeAt(0) < 90) { // numeros
      json[i] += 1;
    }
    if (i.charCodeAt(0) > 97 && i.charCodeAt(0) < 122) { // numeros
      json[i] += 1;
    }
   } else {
     aux.push(i)
   }
 });

console.log(json);

