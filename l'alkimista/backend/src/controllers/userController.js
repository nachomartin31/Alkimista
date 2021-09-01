/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

async function getAll({ query }, res) {
  try {
    const user = await User.find(query);
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function signUp({ user }, res) {
  res.send({
    user,
    message: 'Register works'
  });
}

const refreshTokens = [];
async function login({ user }, res) {
  const data = { _id: user._id, login: user.login };
  try {
    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    const refreshToken = jwt.sign(
      { user: data },
      process.env.JWT_SECRET
    );

    refreshTokens.push(refreshToken);

    return res.json({
      token,
      refreshToken
    });
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOne({ params: { userId } }, res) {
  try {
    await User.findByIdAndDelete(userId);
    res.send('User deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
module.exports = {
  signUp,
  login,
  getAll,
  createOne,
  deleteOne
};
