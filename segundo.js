let data = "bici coche balon _playstation bici coche peluche";
let palabras = "";
const arrglo = [];
let objeto = {};
let seraCaracter = false;
data += ' ';

for (const char of data) {
    let ascii = char.charCodeAt(0);
    if (
        (ascii >= 65 && ascii <= 90) ||
        (ascii >= 97 && ascii <= 122) ||
        ascii === 32
    ) {
        if (seraCaracter === true) {
            if (ascii === 32) {
                seraCaracter = false;
            }
        } else if (ascii === 32) {
            
            validar();
            palabras = "";
        } else {
            palabras += char;
        }
    } else {
        seraCaracter = true;
        palabras = "";
    }
}

function validar() {
   arrglo.push(palabras);
}
const igual = []
for(let i=0; i<arrglo.length; i++) {
    let palabra = arrglo[i];
    let contador =0;
    for(let j=0; j<arrglo[i].length;j++){
        if(arrglo[i]===arrglo[j]){
            //arrglo.splice(j,1);
            contador++;
        }
    }
    if(igual.includes(palabra)===false){
    igual.push(palabra);

    objeto += `${palabra}: ${contador} \n`; 
    }
    
}
console.log(objeto);

