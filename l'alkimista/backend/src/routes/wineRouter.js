const { Router } = require('express');
const wineController = require('../controllers/wineController');

const {
  getAll,
  createWine,
  getOneById,
  deleteById,
  updateWine
} = wineController;

const wineRouter = Router();

wineRouter
  .route('/:wineId')
  .get(getOneById)
  .put(updateWine)
  .delete(deleteById);

wineRouter
  .route('/')
  .get(getAll)
  .post(createWine);

module.exports = wineRouter;
