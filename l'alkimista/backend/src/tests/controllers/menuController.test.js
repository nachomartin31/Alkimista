const Menu = require('../../models/menuModel');
const menuController = require('../../controllers/menuController');

jest.mock('../../models/menuModel');
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
    Menu.find = jest.fn();
  });
  describe('When is invoked with valid arguments', () => {
    test('Then res.json() should be called', async () => {
      Menu.find.mockReturnValue({ populate: jest.fn().mockResolvedValue([]) });
      await menuController.getAll(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with invalid arguments', () => {
    test('Then res.send should be called', async () => {
      Menu.find.mockReturnValue({ populate: jest.fn().mockRejectedValue() });
      await menuController.getAll(req, res);
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
    req = { menu: {} };
  });
  describe('When is invoked when proper arguments', () => {
    test('Then res.json should be called ', async () => {
      Menu.create.mockResolvedValue(req.body);
      await menuController.createOne(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked when wrong arguments', () => {
    test('Then res.send should be called ', async () => {
      Menu.create.mockRejectedValue();
      await menuController.createOne(req, res);
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
    req = { params: { menuId: '' } };
  });
  describe('When is invoked with a valid user', () => {
    test('Then res.send.message should be "User deleted"', async () => {
      Menu.findByIdAndDelete.mockResolvedValue(req.params.menuId);
      await menuController.deleteOne(req, res);
      expect(res.send.mock.calls[0][0]).toBe('Menu deleted');
    });
  });
  describe('When is invoked with an invalid user', () => {
    test('Then res.status should be 500', async () => {
      Menu.findByIdAndDelete.mockRejectedValue();
      await menuController.deleteOne(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});

describe('Given an updateMenu function', () => {
  beforeEach(() => {
    req = {
      params: { MenuId: '' },
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
      Menu.findByIdAndUpdate.mockResolvedValue({});

      await menuController.updateMenu(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with invalid arguments', () => {
    test('Then res.status should be called with 500', async () => {
      Menu.findByIdAndUpdate.mockRejectedValue();
      await menuController.updateMenu(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});
