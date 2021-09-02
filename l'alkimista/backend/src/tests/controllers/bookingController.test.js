const Book = require('../../models/bookingModel');
const bookingController = require('../../controllers/bookingController');

jest.mock('../../models/bookingModel');

let req;
let res;

describe('Given a getAll function', () => {
  beforeEach(() => {
    req = {
      body: {}
    };
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    Book.find = jest.fn();
  });
  describe('When is invoked with valid arguments', () => {
    test('Then res.json() should be called', async () => {
      Book.find.mockResolvedValue([]);
      await bookingController.getAll(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When us unvoked with invalid arguments', () => {
    test('Then res.send should be called', async () => {
      Book.find.mockRejectedValue();
      await bookingController.getAll(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a createBook function', () => {
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    req = { Book: {} };
  });
  describe('When is invoked when proper arguments', () => {
    test('Then res.json should be called ', async () => {
      Book.create.mockResolvedValue(req.body);
      await bookingController.createBook(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked when wrong arguments', () => {
    test('Then res.send should be called ', async () => {
      Book.create.mockRejectedValue();
      await bookingController.createBook(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteBookById function', () => {
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    req = { params: { BookId: '' } };
  });
  describe('When is invoked with a valid user', () => {
    test('Then res.send.message should be "User deleted"', async () => {
      Book.findByIdAndDelete.mockResolvedValue(req.params.BookId);
      await bookingController.deleteBookById(req, res);
      expect(res.send.mock.calls[0][0]).toBe('Book deleted');
    });
  });
  describe('When is invoked with an invalid user', () => {
    test('Then res.status should be 500', async () => {
      Book.findByIdAndDelete.mockRejectedValue();
      await bookingController.deleteBookById(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});

describe('Given an updateBookById function', () => {
  beforeEach(() => {
    req = {
      params: { BookId: '' },
      body: {}
    };
    res = {
      send: jest.fn(),
      json: jest.fn(),
      status: jest.fn()
    };
  });
  describe('When is invoked with valid arguments', () => {
    test('Then res.json should be called', async () => {
      Book.findByIdAndUpdate.mockResolvedValue({});

      await bookingController.updateBookById(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with invalid arguments', () => {
    test('Then res.status should be called with 500', async () => {
      Book.findByIdAndUpdate.mockRejectedValue();
      await bookingController.updateBookById(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});

describe('Given a getBookById function', () => {
  beforeEach(() => {
    req = {
      params: { BookId: '' }
    };
    res = {
      send: jest.fn(),
      json: jest.fn(),
      status: jest.fn()
    };
  });
  describe('When is invoked with valid arguments', () => {
    test('Then res.json should be called', async () => {
      Book.findById.mockResolvedValue({});

      await bookingController.getBookById(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with invalid arguments', () => {
    test('Then res.status should be called with 500', async () => {
      Book.findById.mockRejectedValue();
      await bookingController.getBookById(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});
