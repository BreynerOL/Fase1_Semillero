a = 2;
var a; // hoisting
console.log(a);

/////////////////////////////

console.log(b);
var b = 3; // no funciona asi

////////////////////////////////
saludarte("victor")

function saludarte(youname) { // el compilador analiza el codigo y hace 
                              //uno ajustes para reorganizar el codigo y asi poder ejecutar el hoisting
  console.log("hi "+youname);
}