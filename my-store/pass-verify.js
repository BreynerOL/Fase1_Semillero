const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$AANQgl3wGWRmCwIZVneLAeqStPxasV/adTfHjp4KrrUjDiUn12aNG';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
