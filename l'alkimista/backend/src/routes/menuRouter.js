const { Router } = require('express');
const menuController = require('../controllers/menuController');

const {
  getAll, createOne, deleteOne, updateMenu
} = menuController;

const menuRouter = Router();

menuRouter
  .route('/:menuId')
  .delete(deleteOne)
  .put(updateMenu);

menuRouter
  .route('/')
  .get(getAll)
  .post(createOne);

module.exports = menuRouter;
