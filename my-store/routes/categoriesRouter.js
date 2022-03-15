const express = require('express');

const router = express.Router();
router.get('/', (req, res) =>{
  res.send('Llegaste hasta aqui?.. estupendo')
})

router.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId
  })
})

module.exports = router;
