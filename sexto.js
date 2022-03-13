const almacen = {
    estanteria1: {
      cajon1: {
        producto1: 'coca-cola',
        producto2: 'fanta',
        producto3: 'sprite'
      }
    },
    estanteria2: {
      cajon1: 'vacio',
      cajon2: {
        cajon4: {
          producto1: 'abrazos',
          producto2: 'peliculas',
        },
        producto1: 'pantalones',
        producto2: 'camiseta',
        producto3: 'papitas'
      }
    },
    estanteria3: {
      cajon1: {
        producto1: 'busos',
        producto2: 'ropa',
        producto3: 'otro'
      }
    }
  }
  function validar(palabra){
  const almacen1 = [];
    let estanterias = Object.keys(almacen);
    for(let i=0; i<estanterias.length; i++){
      
        almacen1.push(Object.getOwnPropertyDescriptor(almacen, estanterias[i]));
         let estanteria1 = JSON.stringify(almacen1[i]);
         if(estanteria1.includes(palabra)){
           return 'Si esta mi so';
         }
    }
    return 'No esta mi so';
  }

  console.log(validar('peliculas'));

    
  
  