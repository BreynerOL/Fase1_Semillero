const cadena = '-------&---------_------------------&---------_---------------------------;;;';
pasar();
function pasar(){
    let cambio = '';
    for (const char of cadena) {
        if(char===';'){
            cambio += '.';
        }else if(char === '-'){
            cambio += '7';

        }else if(char === '&'){
            cambio += ' ';
            
        }else if(char === '_'){
            cambio += '\n';
            
        }
        
    }
    console.log(cambio);
}















