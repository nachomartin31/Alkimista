const { Router } = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const {
  getAll, login, signUp, deleteOne
} = userController;
const userRouter = Router();

userRouter
  .route('/register')
  .all(passport.authenticate('signup', { session: false }))
  .post(signUp);

userRouter
  .route('/login')
  .all(passport.authenticate('login', { session: false }))
  .post(login);

userRouter
  .route('/:userId')
  .delete(deleteOne);

userRouter
  .route('/')
  .get(getAll);

module.exports = userRouter;
