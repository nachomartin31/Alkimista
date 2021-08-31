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

async function getBookById({ params: { bookId } }, res) {
  try {
    const book = await Book.findById(bookId);
    res.json(book);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateBookById({ params: { bookId }, body }, res) {
  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, body, { new: true });
    res.json(updatedBook);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteBookById({ params: { bookId } }, res) {
  try {
    await Book.findByIdAndDelete(bookId);
    res.send('Book deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById
};
