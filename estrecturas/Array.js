
// array hecho a "pie"

class array {
  constructor(){
    this.tamaño = 0;
    this.datos = {}
  }

  get(index){
    return this.datos[index];
  }

  push(item){
    this.datos[this.tamaño] = item;
    this.tamaño++;
    return this.datos;
  }

  pop(){
    this.datos[this.tamaño-1] = undefined;
    this.tamaño--;
    return this.datos;
  }

  delete(index){
    const eliminado = this.datos[index];
    this.shiftIndex(index);

    
    return eliminado;
  }

  shiftIndex(index) {
    for (let i = index; i < this.tamaño-1; i++) {
      this.datos[i] = this.datos[i+1]
    }
    console.log(this.tamaño-1);
    delete this.datos[this.tamaño-1]
    this.tamaño--;
  }

  mostrarAray(){
    console.log(this.datos); 
  }

  mostrartamaño(){
    console.log(this.tamaño);
  }
}

const miArray = new array();
miArray.push("hi"); // [0]
miArray.push("ho"); // [1]

miArray.push("hu"); // [2]
miArray.pop(); // delete [2] "hu"

miArray.push("ha"); // [2]
miArray.push("he"); // [3]

miArray.delete(1); // delete [1] "ho"

console.log(miArray.get(2)); 
miArray.mostrarAray();
miArray.mostrartamaño();

////////////////////////////////////

