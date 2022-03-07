const helloFn = () => {
  const hello = "helloWorld"; // no se puede acceder a esta variable por afuera de este bloque;
  console.log(hello);
  return hello;
}

helloFn();

//  console.log(hello); //  no se puede porque esta variable no is global

var scope = "i am global"

// var scope = "i was modified" // modifica la variable cuando esta global :0

function escopeFn() {
  var scope = "now i am just local"; // crea otra variable
   //  scope = "now i am just local but also i was modified"

  const fuct = () => {
    return scope;
  }

  console.log(fuct());
}

escopeFn(); // imprime "now i am just local"
console.log(scope); // imprime "i am global"