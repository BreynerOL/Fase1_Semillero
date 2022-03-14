function otraFunciation(){
    return serompe();
}

function serompe(){
    return 3+z;
}

function serompeAsincrona(cb){
    setTimeout(function () {
        try{
        return 3+z;
    }catch(e){
        console.error('Error en mi funcion asincrona')
        cb(e);
    }
    }, 1000)
}
try{
   // otraFunciation();
   serompeAsincrona(function(err) {
       console.log('Hay error' + err.message);
   });
}catch(e){
    console.error('Vaya, algo se ha roto');
    console.error(e.message);
}

console.log('Esto aqui esta al final');