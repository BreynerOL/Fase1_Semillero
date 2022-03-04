//Llamar un estudiante 
var estudiantes = ["juan", "pablo", "victor", "manuel"];

function nombrar(estudiante){
    console.log(`Hola ${estudiante}`);
}
for(var estudiante of estudiantes){
    nombrar(estudiante);
}
//Ahora utilizando while
while(estudiantes.length>0){
    var estudiante = estudiantes.shift();
    nombrar(estudiante);
    console.log(estudiantes);
}

//Ahora repasemos objetos
var Auto ={
    dueño: "Juan",
    marca: "Renoult",
    modelo: "corolla",
    anio: 2022,
    detalles: function(){
        console.log(`dueño ${this.dueño}, marca ${this.marca} y modelo ${this.modelo}`); 
    }
}
    //Ahora lo hare dinamico
    function auto(dueño, marca, modelo, anio){
        this.dueño = dueño;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    var miauto = new auto("Juan", "Renoult", "Corolla", 2022);
    var miauto2 = new auto("Pablo", "Maxda", "3", 2022);
    
    var misvehiculos = [miauto, miauto2];

    //funcion de filter
    var articulos = [
        {nombre: "Bici", costo: 3000},
        {nombre: "tv", costo: 2500},
        {nombre: "libro", costo: 320},
        {nombre: "celular", costo: 10000},
    ];
    var filtrarArticulos = articulos.filter(function(articulo){
        return articulo.costo <=500
    });
    //Ahora con map
    var mapear = articulos.map(function(articulo){
        return articulo.nombre;
    });
    //Ahora con find
    var encontrar = articulos.find(function(articulo){
        return articulo.nombre==="celular"; 
    });
    //Ahora con forEach
    articulos.forEach(function(articulo){
        console.log(articulo.nombre);
    });
    //some lanza verdadero o falso
    var articulosBaratos = articulos.some(function(articulo){
        return articulo.costo<=1000;
    });