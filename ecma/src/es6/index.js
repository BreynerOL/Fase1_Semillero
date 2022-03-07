function datosPorDefecto(nombre="LordVictor", edad=21, ciudad="Cali") {
  console.log(nombre+" "+edad+" "+ciudad); // es6
}

datosPorDEfecto();

function datosPorDefectoAntes(nombre,edad,ciudad) {
  var nombre = nombre || "victor";
  var edad = edad || 21;
  var ciudad = ciudad || "cali_es_cali_lo_demas_es_loma"; // antes
  console.log(nombre+" "+edad+" "+ciudad);
}

datosPorDefectoAntes();

/////////////////////////////////////////////////////////////////

var a = "hello";
let b = "World";

const c = a + ' ' + b; // antes
const d = `${a} ${b}` // es6
const e = a+" "+b; // la que prefiero yo :)
console.log(e);

