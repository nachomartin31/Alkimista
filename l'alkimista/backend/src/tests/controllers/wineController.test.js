const Wine = require('../../models/wineModel');
const wineController = require('../../controllers/wineController');

jest.mock('../../models/wineModel');

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
    Wine.find = jest.fn();
  });
  describe('When is invoked with valid arguments', () => {
    test('Then res.json() should be called', async () => {
      Wine.find.mockResolvedValue([]);
      await wineController.getAll(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When us unvoked with invalid arguments', () => {
    test('Then res.send should be called', async () => {
      Wine.find.mockRejectedValue();
      await wineController.getAll(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a createWine function', () => {
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    req = { Wine: {} };
  });
  describe('When is invoked when proper arguments', () => {
    test('Then res.json should be called ', async () => {
      Wine.create.mockResolvedValue(req.body);
      await wineController.createWine(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked when wrong arguments', () => {
    test('Then res.send should be called ', async () => {
      Wine.create.mockRejectedValue();
      await wineController.createWine(req, res);
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
    req = { params: { WineId: '' } };
  });
  describe('When is invoked with a valid user', () => {
    test('Then res.send.message should be "User deleted"', async () => {
      Wine.findByIdAndDelete.mockResolvedValue(req.params.WineId);
      await wineController.deleteById(req, res);
      expect(res.send.mock.calls[0][0]).toBe('Wine deleted');
    });
  });
  describe('When is invoked with an invalid user', () => {
    test('Then res.status should be 500', async () => {
      Wine.findByIdAndDelete.mockRejectedValue();
      await wineController.deleteById(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});

describe('Given an updateWine function', () => {
  beforeEach(() => {
    req = {
      params: { WineId: '' },
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
      Wine.findByIdAndUpdate.mockResolvedValue({});

      await wineController.updateWine(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with invalid arguments', () => {
    test('Then res.status should be called with 500', async () => {
      Wine.findByIdAndUpdate.mockRejectedValue();
      await wineController.updateWine(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});

describe('Given a getOneById function', () => {
  beforeEach(() => {
    req = {
      params: { WineId: '' }
    };
    res = {
      send: jest.fn(),
      json: jest.fn(),
      status: jest.fn()
    };
  });
  describe('When is invoked with valid arguments', () => {
    test('Then res.json should be called', async () => {
      Wine.findById.mockResolvedValue({});

      await wineController.getOneById(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with invalid arguments', () => {
    test('Then res.status should be called with 500', async () => {
      Wine.findById.mockRejectedValue();
      await wineController.getOneById(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});
