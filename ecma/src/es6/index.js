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


////////////////////////////////////////////////////////////////

let namenombre = "victor"
let edadage = 21;

personPersona = { // es6
  namenombre, edadage
}

console.log(personPersona.namenombre, personPersona.edadage);

var objeto = {
  marca: "es5",
  numero: 5
}

///////////////////////////////////////////////////////////////

const names = [
  {nombre: "victor", edad: 21},
  {nombre: "yesica", edad: 27}
]

let listaDeNombre2 = names.map(i => console.log(i));

let listaDeNombre = names.map(function(item) {
  console.log(item.nombre);
})

/////

const arrowFuntions = (parametro1, parametro2) => {
  console.log("logica de la funcion");
}

const arrowFuntions2 = onlyparametro => {
  onlyparametro = "se puede escribir asi una funcion cuando tiene un solo parametro";
  console.log(onlyparametro);
}

const arrowFuntions3 = numeros => console.log(numeros**2 );  // duda

arrowFuntions();
arrowFuntions2("hi");
arrowFuntions3(2);

/////////////////////////////////////////////


class persona {
  nombre;
  edad;
  pais;
  TPiel = true;

  constructor(nombre = "name", edad = 0, pais = "Sin pais"){
    this.nombre=nombre;
    this.edad=edad;
    this.pais=pais;
  }

  mostrarEdad(){
    return console.log(this.edad);
  }

  tienePiel(){
    return console.log(this.TPiel);
  }

  MostrarPais(){
    return console.log(this.pais); 
  }
}

const persona1 = new persona("victor", 21);

persona1.tienePiel();
persona1.mostrarEdad();
persona1.MostrarPais();

////////////////////////////////////////////////////////////////


