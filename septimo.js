let array1 = ['a1','b2','c3','d4','e5']
let array2 = ['f2','g1','h3','i5','j4']

function llaves(){
    if(validar()==='malo'){
        return 'El numero del arreglo debe estar a lo ultimo'
    }

    const resultado = [];
    for (let i = 0; i < array1.length; i++) {
        
        let a = array1[i].substring(array1[i].length-1);
        for (let j = 0; j < array2.length; j++) {
            
            let b = array2[j].substring(array2[j].length-1);
            if(isNaN(a) || (Number(a) !== a)){

            }
            if(a===b){
                resultado.push(array1[i].substring(0, array1[i].length -1) + array2[j].substring(0, array2[j].length -1));
            }
            
        }
        
    }
    return resultado;
}

function validar(){
    try{
        for (let i = 0; i < array1.length; i++) {
            let a = Number(array1[i].substring(array1[i].length-1));
            if(isNaN(a) || (Number(a) !== a)){
                throw new Error("malo");
            }
            
        }
        for (let i = 0; i < array2.length; i++) {
            let a = Number(array2[i].substring(array2[i].length-1));
            if(isNaN(a) || (Number(a) !== a)){
                throw new Error("malo");
            }
            
        }
        return 'melo';
    }catch(e){
        return 'malo';
    }
}
console.log(llaves());