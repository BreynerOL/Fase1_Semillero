

const papa = (nuevoEngendro) =>{
  var cantidadDeHijos = 0;
  
  const crearEngendro = (nuevoEngendro) =>{
      cantidadDeHijos += nuevoEngendro;
      console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
  }
  return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
traigamosHijosAlMundo(1)  // cantidad de engendritos = 3

//////////////////////////////////////////////////////////////////////////////////////
function alcancia(valor) { // funcion padre
  let saldo = 0;
  var j; // variable que se crea para que se "valor" se comunique con la funcion hja
  valor = j;

  function ingresarsaldo(j) { // funcion hija
    saldo += j;
    console.log("mi saldo es "+saldo);
  }

  return ingresarsaldo;  
}

const alcancia1= alcancia(); // dos alcancias distintas! para lograr esto la variable de la funcion padre
                            //debe comunicarse con la funcion hija

alcancia1(6);
alcancia1(4);
alcancia1(10);

alcancia1(-2);

const alcancia2= alcancia();

console.log("//////////////////////////////////////////////////");

alcancia2(20);
alcancia2(20);
alcancia2(20);

/////////////////////////////////////////////////////////////////


const construirCuenta = (i) => {
  let count = i;

  const mostrarCuenta = () => {
    console.log(count++);
  }
  return mostrarCuenta;
}

const count1 = construirCuenta(1);

count1(10); // le valio burguer ese 10 es como si no existiera
count1();
count1();

const const2 = construirCuenta(10);
const2();
const2();

///////////////////////////////////////////////////////////////////////

const person = () => {
  let myName = "Name";

  return{
    getName: () => {return myName},
    setName: (Name) => {myName=Name}
  }
}

var newperson = person();
console.log(newperson.getName());

newperson.setName("victor")
console.log(newperson.getName());

///////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < 10; i++) {

  setTimeout(() => {
    if (i == 9) {
      console.log("////////////////////////////////////////");
    }
  }, 3000);
  console.log(i);
  
}

for (var j = 0; j < 10; j++) {
   setTimeout(() => {
     console.log(j);
   }, 3000);
}