var tabla = [
    {
        a:1,
        b:'z'
    },
    { 
        a:2,
        b:'Otra'
    }
]
console.table(tabla);

function funcion1(){
    console.group('Funcion1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    funcion2();
    console.log('Hemos vuelto a la 1');
    console.groupEnd('Funcion1');
}

function funcion2(){
    console.group('Funcion2');
    console.log('Ahora estamos en la funcion2')
    console.groupEnd('Funcion2');
}

funcion1();