function comparar(DateUno, DateDos){
   if(DateDos.getTime() > DateUno.getTime()){
      return 'Fechas incorrectas'
   }
   let fechaFinal = new Date();
   fechaFinal = DateDos;
   let contador = 0;
   let bandera = true;
   while(bandera){
      contador++;
      let numero = Number(fechaFinal.getDate()+1);
      fechaFinal.setDate(numero);
      
      if(fechaFinal.getTime() == DateUno.getTime()){
         bandera = false;
         return contador;
      }
   }
   
}
let DateUno = new Date(2005,01,15);//Debe de ser mas grande ue le fecha o DateDos
let DateDOS = new Date(2004,01,15);
console.log(comparar(DateUno, DateDOS));