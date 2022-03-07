var a = "helloWorld"

function hello() {
  let b = "helloWorld"
  const c = "helloWorld"

  if (true) {
    let d = "helloWorld"
    debugger // se coloca esta palabra clave donde quiero que la ejecucion se pause
  }
}

hello();