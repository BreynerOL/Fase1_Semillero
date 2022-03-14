/* 4. Cree una función que reciba un parámetro Date (Fechas en javascript)
y calcule dado dos fechas el número de días en que se diferencian,
ej: 15 de Enero - 15 Febrero => 31;
la función debe poder distinguir entre años bisiestos (sólo desde 1992) */

const fecha1 = new Date("January 15 2020");
const fecha2 = new Date("February 15 2020");

function RestDate(Date1, Date2) {
  return (Math.abs(fecha1-fecha2)/(1000 * 3600 * 24));
}

console.log(RestDate(fecha1,fecha2));


// let b = 0; 
// if (fecha1.getFullYear() % 400 === 0) {
//   b++;
// }
// else if (fecha1.getFullYear() % 4 === 0 && fecha1.getFullYear() % 100 != 0) {
//   b++;
// }

// if (fecha2.getFullYear() % 400 === 0) {
//   b++;
// }
// else if (fecha2.getFullYear() % 4 === 0 && fecha1.getFullYear() % 100 != 0) {
//   b++;
// }