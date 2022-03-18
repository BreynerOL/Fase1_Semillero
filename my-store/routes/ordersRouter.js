const express = require('express');
const OrderService = require('./../services/orderService');
const validatorHandler = require('./../middlewares/validatorHandler');
const {
  createOrderSchema,
  getOrderSchema,
  addItemsSchema
} = require('./../schemas/orderSchema');

const router = express.Router();
const service = new OrderService();

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.json(order);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try{
    const body = req.body;
    const newOrder = await service.create(body);
    res.status(201).json(newOrder);
    } catch(error){
      next(error);
    }
  }
);

router.post(
  '/add-item',
  validatorHandler(addItemsSchema, 'body'),
  async (req, res, next) => {
    try{
    const body = req.body;
    const newItem = await service.addItem(body);
    res.status(201).json(newItem);
    } catch(error){
      next(error);
    }
  }
);

module.exports = router;
