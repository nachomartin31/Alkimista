const Dish = require('../../models/dishModel');
const dishesController = require('../../controllers/dishesController');

jest.mock('../../models/dishModel');

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
    Dish.find = jest.fn();
  });
  describe('When is invoked with valid arguments', () => {
    test('Then res.json() should be called', async () => {
      Dish.find.mockResolvedValue([]);
      await dishesController.getAll(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When us unvoked with invalid arguments', () => {
    test('Then res.send should be called', async () => {
      Dish.find.mockRejectedValue();
      await dishesController.getAll(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a createOne function', () => {
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    req = { dish: {} };
  });
  describe('When is invoked when proper arguments', () => {
    test('Then res.json should be called ', async () => {
      Dish.create.mockResolvedValue(req.body);
      await dishesController.createOne(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked when wrong arguments', () => {
    test('Then res.send should be called ', async () => {
      Dish.create.mockRejectedValue();
      await dishesController.createOne(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteOne function', () => {
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    req = { params: { userId: '' } };
  });
  describe('When is invoked with a valid user', () => {
    test('Then res.send.message should be "User deleted"', async () => {
      Dish.findByIdAndDelete.mockResolvedValue(req.params.DishId);
      await dishesController.deleteDish(req, res);
      expect(res.send.mock.calls[0][0]).toBe('Dish deleted');
    });
  });
  describe('When is invoked with an invalid user', () => {
    test('Then res.status should be 500', async () => {
      Dish.findByIdAndDelete.mockRejectedValue();
      await dishesController.deleteDish(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});

describe('Given an updateDish function', () => {
  beforeEach(() => {
    req = {
      params: { dishId: '' },
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
      Dish.findByIdAndUpdate.mockResolvedValue({});

      await dishesController.updateDish(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with invalid arguments', () => {
    test('Then res.status should be called with 500', async () => {
      Dish.findByIdAndUpdate.mockRejectedValue();
      await dishesController.updateDish(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});

describe('Given a getish function', () => {
  beforeEach(() => {
    req = {
      params: { dishId: '' }
    };
    res = {
      send: jest.fn(),
      json: jest.fn(),
      status: jest.fn()
    };
  });
  describe('When is invoked with valid arguments', () => {
    test('Then res.json should be called', async () => {
      Dish.findById.mockResolvedValue({});

      await dishesController.getDishById(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with invalid arguments', () => {
    test('Then res.status should be called with 500', async () => {
      Dish.findById.mockRejectedValue();
      await dishesController.getDishById(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});
