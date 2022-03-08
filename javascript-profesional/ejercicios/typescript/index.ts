console.log('Hello typeScript');

function add(a: number, b: number){
    return a+b;
}
const sum = add(2,3);

console.log(sum);

//Boolean
let muted: boolean = true;

//Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador/denominador;

//String
let nombre: string = 'Richar';

//Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
people.push('sara');
//Añadir varios tipos de datos
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Juan');
peopleAndNumbers.push(300);

//Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin: any = 'Joker';
comodin = {type: 'Wildcard'};

//Object

let someObject: object = {type: 'Wildcard'};

//Funciones
function add1(a:number,b :number): number{
    return a+b;
}
const sum1 = add1(4,5);

function createAdder ( a:number): (number) => number{
    return function(b:number){
        return b+a;
    }
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);
//El ? significa que puede ser undefined o el tipo de dato que le pasemos
function fullName(firsName: string, lastName?: string): string{
    return `${firsName} ${lastName}`;
}
const richar = fullName('Rishcar', "cleves");

console.log(richar);

//Interfaces
interface Rectangulo{
    ancho: number
    alto: number
    color?:Color,
}

let rect: Rectangulo = {
    ancho: 4,
    alto:6,
    color: Color.Rojo,
    
}

function area(r: Rectangulo){
    return r.alto * r.alto;
}
const areaRect = area(rect);
console.log(areaRect);

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}
console.log(rect.toString());
