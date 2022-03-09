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

////////////////////////////////////////////////////////////////<

function* generadorDehola() {
  if (true) {
    yield "hello";
  }
  if (true) {
    yield "mundo";
  }
};

const generador = generadorDehola();
console.log(generador.next().value); 
console.log(generador.next().value);

//////////////////////////////////////////////////////////
// es7


function saberSiEsta(a, b) {
  if (a.includes(b)) {
    console.log("si, si esta");
  } else {
    console.log("no esta");
  }
}

var a = [1,2,3,4,5]
saberSiEsta(a, "5") // NO esta! por ende es estricto

let base = 2;
let potencia = 3;

let resultado = base**potencia;

console.log(resultado);

///////////////////////////////////////////////////////
//es8

const data = {
  fronend: "breyner",
  backend: "juan",
  desing: "mario",
}

const entries = Object.entries(data);
const entries2 = Object.values(data);

console.log(entries.length); // saber cuantos atributos hay en un objeto
console.log(entries2)

var string = "string"
console.log(string.padEnd(12, "F++"));
console.log(string.padStart(12, "hi")); // agraga pero no modifica la variable
console.log(string);
//////////////////////////////////////////////////////
//es9
// promesas

const helloWorld = () => {
  return new Promise ((resolve, reject) => {
    (true) ? setTimeout (() => resolve("helloWorld"), 3000) : reject(new Error("test Error"))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

const anotherFutions = async () => {
  try {
    const hellor = await helloWorld();
    console.log(hellor);
  } catch (error) {
    console.log(error);
  }
}

anotherFutions();

///////////////////////////////////////////////////////////

const obj = {
  name: 'Victor',
  age: 32,
  country: 'Co'
};

let { age, ...all} = obj; // separa lo que esta de primer parametro del resto
console.log(age, all);


///////////////////

const obja = {
  name: 'Oscar',
  age: 32
};

const objb = {
  ...obja,             // adiciona un parametro del objeto, puede ser tanto antes como depues
  country: 'MX',
  //...obja,
};
console.log(objb);

/////////////////////



/**
 * Promise Finally
 */
const helloWorld2 = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Hello World!');
        }, 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld2()
  .then(result => console.log('result -> ', result))
  .catch(err => console.log('err -> ', err))
  .finally(() => console.log('finalizo')); // saber si ya finalizo

/**
 * Regex
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);

////////////////////////////////////
//es10

//--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let arrayX = [[1,2,3], [4,5,6], [7,8,9]];

console.log(arrayX.flat(1))

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let arrayZ = [1,2,3];

console.log(arrayZ.flatMap(value => [value * 2])); // multiplicar matrices

//----------------trim---------------------------/
let helloT = '                                                hello world';
//console.log(helloT);
console.log(helloT.trimStart()); // inicio quita los espacios

let helloY = 'hello world                  ';
console.log(helloY);
console.log(helloY.trimEnd()); // final quita los espacios

//-------------optional catch biding-------------/

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// arrayX to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);```