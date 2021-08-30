const { Router } = require('express');
const menuController = require('../controllers/menuController');

const { getAll, createOne, deleteOne } = menuController;

const menuRouter = Router();

menuRouter
  .route('/')
  .get(getAll)
  .post(createOne);

menuRouter
  .route('/:menuId')
  .delete(deleteOne);

module.exports = menuRouter;
