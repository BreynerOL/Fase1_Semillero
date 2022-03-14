/*6. Dado este json que representa un inventario
cree una función que permita buscar un producto dado como parámetro; 
tenga en cuenta que el almacén puede o no tener mas de un cajon y mas de una estantería así 
como un cajón dentro de otro cajón con una profundidad N, el código anterior es solo un ejemplo*/

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta'
    },
    'cajon3': {
      'producto1': 'pantalones',
      'producto2': 'camiseta',
      'cajonsubterranio': {
        'producto1': 'misterSatan',
        'producto2': 'tometes'
      }
    }
  }
}

let Producto = false

function Buscar(json, parametro) {
 
  for (const i in json) {
    if (typeof(json[i]) === "object") {
      Buscar(json[i], parametro)
    }if (json[i] === parametro) {
      return Producto = true
    }
  }
  return Producto;
}

console.log("This product is", Buscar(almacen, "misterSatan"));

// funciona pero el costo computacional es muy alto despues veo otra solucion :)