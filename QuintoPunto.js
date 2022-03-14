/*5. Dada la siguiente firma de una function
function sumElem(array, result) {}
complete la función para que permita buscar dos números dentro de Array 
que sumados den el parámetro result y retornelos como un array [num1,num2], 
de no encontrarse la función debe retornar un array vacío*/

let array = [1,2,3,4,5,6]

function sumElem(array, result) {
  let ArrayResultante = []
  for (const i in array) {
    for (const j in array) {
      if (array[i] + array[j] === result) {
        ArrayResultante.push(array[i])
        ArrayResultante.push(array[j])
        return ArrayResultante;
      }
    }
  }
  return ArrayResultante;
}

console.log(sumElem (array, 8)); 
