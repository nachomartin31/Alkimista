const { Router } = require('express');
const passport = require('passport');

const bookingController = require('../controllers/bookingController');

const {
  getAll, createBook, getBookById, updateBookById, deleteBookById
} = bookingController;

const bookRouter = new Router();

bookRouter
  .route('/new')
  .post(createBook);

bookRouter
  .route('/:bookId')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getBookById)
  .put(updateBookById)
  .delete(deleteBookById);

bookRouter
  .route('/')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getAll);

module.exports = bookRouter;
