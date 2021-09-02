const { Router } = require('express');
const passport = require('passport');
const dishesController = require('../controllers/dishesController');

const {
  getAll, createOne, updateDish, deleteDish, getDishById
} = dishesController;

const dishRouter = new Router();

dishRouter
  .route('/:dishId')
  .get(getDishById);

dishRouter
  .route('/:dishId')
  .all(passport.authenticate('jwt', { session: false }))
  .put(updateDish)
  .delete(deleteDish);

dishRouter
  .route('/')
  .get(getAll)
  .post(createOne);

module.exports = dishRouter;
