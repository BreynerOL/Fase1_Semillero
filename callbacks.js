function hola(nombre, callback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    callback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("blablabla");
    callbackHablar();
  }, 1000);
}

function adios(nombre, Micallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    Micallback();
  }, 1000);
}

function conversacion(nombre, veces, callback){
    if(veces >=0){
    hablar(function () {
        conversacion(nombre, --veces, callback);
    });
}else{
    adios(nombre, callback);
}
}
console.log("iniciando proceso");
hola('Juan', function(nombre) {
    conversacion(nombre,3, function(){
        console.log("Proceso terminao");
    });
})
/*
hola('Juan', function(nombre){
    adios(nombre, function() {
        console.log("Terminamos");
    })
});
/*
hola("Juan", function (nombre) {
  hablar(function () {
    hablar(function () {
      adios(nombre, function () {
        console.log("Terminando proceso");
      });
    });
  });
});
/*
hola('Juan', function(){});
adios('Juan', function(){});*/
