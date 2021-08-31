const { Router } = require('express');
const dishesController = require('../controllers/dishesController');

const {
  getAll, createOne, updateDish, deleteDish, getDishById
} = dishesController;

const dishRouter = new Router();

dishRouter
  .route('/:dishId')
  .get(getDishById)
  .put(updateDish)
  .delete(deleteDish);

dishRouter
  .route('/')
  .get(getAll)
  .post(createOne);

module.exports = dishRouter;
