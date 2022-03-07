function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6

function newFunction2(name = 'oscar', age = 32, country='COL'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'col');

 let lorem = "Qui consequatur. commodi \n"
    + "Otra franse epica que necesitamos.";

    console.log(lorem);
    let lorem2 = `otra frace epica que necesitamos 
    ahora es otra frase`;

    console.log(lorem2);

    let person = {
        'name': 'oscar',
        'age': 32,
        'country': 'MX'
    }
    console.log(person.name, person.age, person.country);

    let {name, age, country} = person;
    console.log(name, age, country);


    let team1 = ['Oscar', 'Julian', 'Ricardo'];
    let team2 = ['Valeria', 'Yesica', 'Camila'];

    let education = ['David', ...team1, ...team2];
    console.log(education);

    {
        var globalVar = "Global var";
    }
    {
        var globalLet = 'Global Let';
        console.log(globalLet);
    }

    console.log(globalVar);


    const a = 'b';
    a = 'a';

    console.log(a);

    let name = 'Juan';
    let age = 20;

    obj = {name: name, age: age};

    obj2 = {name,age};
    console.log(obj2);

    const names = [
        {  name: 'Juan',   age: 20},
        {  name: 'Yesica',   age: 27}
    ]

    let listOfName = names.map(function (item){
        console.log(item,name);
    });

    let listOfName2 = name.map(item => console.log(item.name));

    const listOfName3 = (name, age, country) => {
        ...
    }
    const listOfName4 = name => {
        ...
    }
    const sqaare = num => num*num;

    const helloPromise = () => {
        return new Promise((resolve, reject) => {
            if(true){
                resolve('Hey!');
            }else{
                reject('Ups!');
            }
        });
    }
    helloPromise()
    .then(Response =>console.log(Response))
    .catch(error => console.log(error));



    class calculate {
        constructor() {
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new calculate();
    console.log(calc.sum(2,2));

    import { hello } from './module';

    hello();


    function* helloWorld(){
        if(true){
            yield 'Hello, ';
        }
        if(true){
            yield 'World';
        }
    };

    const generaterHello = helloWorld();
    console.log(generaterHello.next().value);
    console.log(generaterHello.next().value);
    console.log(generaterHello.next().value);