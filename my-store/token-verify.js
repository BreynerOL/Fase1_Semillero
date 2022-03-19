const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0NzYyMTcwNH0.WICCmz1wV2WXdJGu0waCFvGaX6ZXqor5R4l-S5pbgGM';

function verifyToken(token,secret){
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);

