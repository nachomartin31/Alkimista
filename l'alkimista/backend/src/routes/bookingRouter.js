const { Router } = require('express');
const bookingController = require('../controllers/bookingController');

const {
  getAll, createBook, getBookById, updateBookById, deleteBookById
} = bookingController;

const bookRouter = new Router();

bookRouter
  .route('/:bookId')
  .get(getBookById)
  .put(updateBookById)
  .delete(deleteBookById);

bookRouter
  .route('/')
  .get(getAll)
  .post(createBook);

module.exports = bookRouter;
