const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const{ logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();

const port = 8000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors());
const ip =  '192.168.1.85'
//Damos la ruta
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})


app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);



//Aplicamos destructuracion para sacar los ids


app.listen(port, () => {
  console.log(`http://${ip}:${port}/`);
});
