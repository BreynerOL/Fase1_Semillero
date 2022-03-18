//Aqui vamos a poner variables de entorno
//NODE_ENV es una variable que ya esta en node
require('dotenv').config();
const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser:  process.env.DB_USER,
  dbPassword:  process.env.DB_PASSWORD,
  dbHost:  process.env.DB_HOST,
  dbName:  process.env.DB_NAME,
  dbPort:  process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
}

module.exports = { config };
