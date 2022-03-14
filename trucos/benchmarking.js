let suma =0;

console.time('Bucle');
let suma2 =0;
for (let i = 0; i < 1000000000; i++) {
    suma2 +=1;
    
}

console.timeEnd('Bucle')
console.time('asincrona');
asincrona()
.then(() => {
    console.timeEnd('asincrono');
}); 
function asincrona(){
    return new Promise((resolve, reject) =>{
        console.log('Termina el proceso asincrono')
        resolve();
    })
}


