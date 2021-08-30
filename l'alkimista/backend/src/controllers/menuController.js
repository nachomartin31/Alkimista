const Menu = require('../models/menuModel');

async function getAll({ query }, res) {
  try {
    const menuSelected = await Menu.find(query)
      .populate({
        path: 'dishes',
        select: 'name'
      });
    res.json(menuSelected);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newMenu = await Menu.create(body);
    res.json(newMenu);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOne({ params: menuId }, res) {
  try {
    await Menu.findByIdAndDelete(menuId);
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
