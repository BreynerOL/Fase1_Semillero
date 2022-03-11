const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]


  const arrayFinal = [];
  for(let i=0; i<ovejas.length; i++){

      if(ovejas[i].name.toLowerCase().includes('a')){

          if(ovejas[i].name.toLowerCase().includes('n')){
              if(ovejas[i].color.toLowerCase().includes('rojo')){
              console.log(ovejas[i].name);
              arrayFinal.push(ovejas[i]);
              }
          }
      }else{
          continue;
      }
  }

  console.log(arrayFinal);