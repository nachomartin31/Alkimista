const Dish = require('../models/dishModel');

async function getAll({ query }, res) {
  try {
    const dish = await Dish.find(query);

    res.json(dish);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const createdDish = await Dish.create(body);
    res.json(createdDish);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getDishById({ params: { dishId } }, res) {
  try {
    const dish = await Dish.findById(dishId);
    res.json(dish);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateDish({ params: { dishId }, body }, res) {
  try {
    const dishToUpdate = await Dish.findByIdAndUpdate(dishId, body, { new: true });
    res.json(dishToUpdate);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteDish({ params: { dishId } }, res) {
  try {
    await Dish.findByIdAndDelete(dishId);
    res.send('Dish deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
module.exports = {
  getAll,
  createOne,
  updateDish,
  deleteDish,
  getDishById
};
