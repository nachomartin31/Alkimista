const { Router } = require('express');
const dishesController = require('../controllers/dishesController');

const {
  getAll, createOne, updateDish, deleteDish
} = dishesController;

const dishRouter = new Router();

dishRouter
  .route('/')
  .get(getAll)
  .post(createOne);

dishRouter
  .route('/:dishId')
  .put(updateDish)
  .delete(deleteDish);
