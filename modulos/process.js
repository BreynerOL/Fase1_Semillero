process.on('beforeExit',() => {
    console.log('El proceso va a terminar')
})

process.on('exit',() => {
    console.log('Ale, el proceso se acabo')
})

process.on('uncaughtException', (err, origen) =>{
    console.log('Vaya se nos ha olvidado capturar un error!');
    console.error(err);
})


funcion1();

console.log('esto si el error no se recoje, no sale');
