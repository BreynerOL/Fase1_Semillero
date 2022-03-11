let arreglo = "bici coche (balon) bici coche peluche";
let palabra ='';
let bandera = false;
for (const char of arreglo) {
    if(char ==='('){
        bandera= true;  
    }
    if(char===')'){
        palabra += char;
        bandera= false;
        console.log(validar());
        break;
    }
    if(bandera===true) {
        palabra += char;
    }
}

function validar(){
    
    console.log(palabra[palabra.length-1]);
    if(!palabra[palabra.length-1]===')'){
        return false;
    }else if(palabra === '()'){
        return false;
    }
    for (const char of palabra) {
        let ascii = char.charCodeAt(0);
        console.log(ascii);
        if((ascii>=00 && ascii<=31)||(ascii>=33 && ascii<=39)||(ascii>=42 && ascii<=64)||(ascii>=91 && ascii<=96)||(ascii>=123))
        {
            console.log('Entre aqui');
            return false;
        }else if (char === palabra[palabra.length-1]){
            return true;
        }
    }
        
    
}