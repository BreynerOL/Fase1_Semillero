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