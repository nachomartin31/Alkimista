const { Router } = require('express');
const userController = require('../controllers/userController');

const { getAll, createOne, deleteOne } = userController;
const userRouter = Router();

userRouter
  .route('/:userId')
  .delete(deleteOne);

userRouter
  .route('/')
  .get(getAll)
  .post(createOne);

module.exports = userRouter;
