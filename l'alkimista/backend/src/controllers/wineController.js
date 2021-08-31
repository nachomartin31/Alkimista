const Wine = require('../models/wineModel');

async function getAll({ query }, res) {
  try {
    const wine = await Wine.find(query);
    res.json(wine);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createWine({ body }, res) {
  try {
    const newWine = await Wine.create(body);
    res.json(newWine);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ params: { wineId } }, res) {
  try {
    const wine = await Wine.findById(wineId);
    res.json(wine);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteById({ params: { wineId } }, res) {
  try {
    await Wine.findByIdAndDelete(wineId);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateWine({ body, params: { wineId } }, res) {
  try {
    await Wine.findByIdAndUpdate(wineId, body, { new: true });
    const updatedWine = await Wine.findById(wineId);
    res.json(updatedWine);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createWine,
  getOneById,
  deleteById,
  updateWine

};
