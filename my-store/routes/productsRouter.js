const express = require('express');
const ProductServices = require('./../services/productServices');
const validatorHandler = require('./../middlewares/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/productSchema');

const router = express.Router();
const service = new ProductServices();

//Logica de negocio
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await service.findOne(id);
    res.json(products);
  } catch (err) {
    next(err);
  }
}
);

router.post('/',
validatorHandler(createProductSchema, 'body'),
async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const products = await service.update(id, body);
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rspta = await service.delete(id);
  res.json(rspta);
});
//La ruta de arriba y abajo chocan, osea que pongo la direccion pero se
//me pone como si fuera el ID de arriba
//Se arregla poniendo todo lo especifico antes de lo dinamico
/*app.get('/products/filter', (req, res) =>{
  res.send('Yo soy un filter');
})*/
module.exports = router;
