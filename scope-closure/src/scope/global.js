var a = "hello";

let b = "wolrd";


const c = "helloWorld";


const fn = () => {
  console.log(a);
  console.log(b);
  console.log(c);
}

fn();

console.log("//////////////////////////////////////////////////");


var a = "bye";
a = "bye 2"

b = "world"; // si se puede resignar
// let b = "jojojo"; no se puede :<


//c = "byeWorld"; no se puede reasignar 

fn();

const anotherFutions = () => {
  globalvar = "im gblobal";  // mala practica de programacion
}

anotherFutions();
console.log(globalvar);

const anotherFutions2 = () => {
  var localvar = globalvar = "hey world";
}

anotherFutions2();
console.log(globalvar)

