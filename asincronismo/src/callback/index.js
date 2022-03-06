/*


function restar(a,b) {
  return a-b;
}

function call(x,y,z) {
  return z(x,y);
}

console.log(call(2,3, restar));

//////////////////////////////////////////////////////////////////////


 //callback es un funcion que es pasada como parametro en otra funcion

 function mensaje(fn) {
  setTimeout(function() {
    console.log("setTimeout es una funcion que se usa para congelar el tiempo"); // firts
    fn(); // after
  }, 3000); // tiempo que esta pausada
}

function mensaje2() {
  console.log("mensaje 2"); 
}

mensaje(mensaje2);


setTimeout(function() {
  console.log("this is a settimeout");
}, 2000);



///////////////////////////////////////////////////////////////
*/


// var A = "hi";

function A(fn){
  return fn() + " mundo!";
}

function B(){ // function callback
  return"hola"
}

function C() { // function callback
  return "hey";
}

console.log(A(C)); // error cuando hay una variable y una funcion con el mismo nombre y se hace callback