const Book = require('../models/bookingModel');

async function getAll({ query }, res) {
  try {
    const book = await Book.find(query);
    res.json(book);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createBook({ body }, res) {
  try {
    const book = await Book.create(body);
    res.json(book);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createBook
};
