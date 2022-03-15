/*7. Cree una función que permite combinar dos arreglos de cadenas dados basados en un numero guia:
el arreglo anterior es solo guia, las letras pueden cambiarse por palabras 
y variar el orden, pero el numero guia debe ser de solo un digito, de 0 - 9*/
//result = ['ag','bf','ch','di','ej']
let array1 = ['arbol1','balon2','carro3','dado4','elefante5', "Zapato0"]
let array2 = ['fruta2','helado3','iglesia5','jaguar4', "Yolo0", 'globo1']

function CombinarS(s1, s2) {
  let result = []
  array1.forEach(i => {
    array2.forEach(j => {
      if (i.charAt(i.length-1) === j.charAt(j.length-1)) {
        result.push(i.slice(0, -1) + j.slice(0, -1))
      }
    });
  });
  return result
}

console.log(CombinarS(array1, array2));