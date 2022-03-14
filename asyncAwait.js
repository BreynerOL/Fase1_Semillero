async function hola(nombre, callback) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Hola " + nombre);
        resolve(nombre);
      }, 1500);
    });
  }
  
  async function hablar(nombre) {
      return new Promise(function (resolve, reject) {
          setTimeout(function () {
              console.log("blablabla");
              resolve('Hay un error');
            }, 1000);
      })
    
  }
  
  async function adios(nombre) {
      return new Promise((resolve, reject) =>{
          setTimeout(function () {
              console.log("Adios " + nombre);
              resolve();
            }, 1000);
      })
    }
async function main(){
    let nombre = await hola('Juan');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

console.log('Empezamos el proceso')
main();
console.log('Terminamos el proceso')