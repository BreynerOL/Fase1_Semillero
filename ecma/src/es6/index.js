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

///////////////////////////////////////////////////////////////////

let fraseEpica = "quiero hacer una frase epica \n" + "pero no se que poner :c"; // antes

console.log(fraseEpica);

var fraseEpica2 = `frase epica en construccion 
frase epica no contruida` // es6

console.log(fraseEpica2);

///////////////////////////////////////////////////////////////////////////

let person = {
  nombre: "victor", // before
  edad: 21,
  pais: "CO"
};

let  {nombre, edad, pais} = person;
console.log(nombre, edad, pais); // :O se le pone la coma para separarlos 

/////
let pc = {
  marca: "acer",
  ram: 20,    // now
  cpu: "intel"
}

console.log(pc.marca, pc.ram, pc.cpu);

/////////////////////////////////////////////////////

// unir listas

let team1 = ["victor", "juan", "mario"]
let team2 = ["jessica", "valeria", "sofia"]

var education = ["oscar", ...team1, ...team2];

console.log(education);

///////////////////////////////////////////////////

{
  let v1 = "hey";
  console.log(v1);
}

{
  var v2 = "world";
}

{
  const v3 = "no modificable";
}

//console.log(v1); // no se puede
console.log(v2);
// console.log(v3); // tampoco se puede

