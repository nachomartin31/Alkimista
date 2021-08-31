const { Router } = require('express');
const passport = require('passport');
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
  .all(passport.authenthicate('jwt', { session: false }))
  .route('/')
  .get(getAll)
  .post(createBook);

module.exports = bookRouter;
