const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin 123 .202';
  //Le pasamos lo que vamos a encriptar y el numero de veces
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();
