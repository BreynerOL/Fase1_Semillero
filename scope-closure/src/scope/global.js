var hello = 'Hello ';
var hello = "Hello +";
let world = 'Hello world';

const helloWorld = 'Hello World!';

console.log(hello);

const anotherFunction=() => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld1 = () => {
    globalVar = 'Im global'
}

helloWorld1();
console.log(globalVar);

const anotherFunction1 = () => {
    var localVar = globalVar = 'Im Global';
}
anotherFunction1();
console.log(globalVar);