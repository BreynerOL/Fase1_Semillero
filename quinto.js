
function sumElem(array, result) {
    try{
        if(validar(array)==="malo" || Number.isNaN(result) || (Number(result) !== result)){
            throw new Error("El caracter introducido no es un numero");
        }
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length; j++) {
            if(index!=j){
            if((array[index] + array[j])===result) {
            return suma = [array[index], array[j]];
            }
        }
        }
        
    }
}catch(e){
    return'Los argumentos pasados no son validos'
}
    return [];
}


function validar(array){
    try{
        for (let i = 0; i < array.length; i++) {
            if(isNaN(array[i]) || (Number(array[i]) !== array[i])){
                throw new Error("malo");
            }
            
        }
    }catch(e){
        return 'malo';
    }
}
let array = [0,4,5,6,7,8];
console.log(sumElem(array, 10));