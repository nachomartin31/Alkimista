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
  getAll,
  createOne,
  deleteOne
};
