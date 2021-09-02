const jwt = require('jsonwebtoken');
const userController = require('../../controllers/userController');
const User = require('../../models/userModel');

jest.mock('../../models/userModel');
jest.mock('jsonwebtoken');
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
    User.find = jest.fn();
  });
  describe('When is invoked with valid arguments', () => {
    test('Then res.json() should be called', async () => {
      User.find.mockResolvedValue([]);
      await userController.getAll(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When us unvoked with invalid arguments', () => {
    test('Then res.send should be called', async () => {
      User.find.mockRejectedValue();
      await userController.getAll(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a signUp function', () => {
  describe('When called with an user', () => {
    test('Then res.send.message should be "Register works"', async () => {
      req = { user: {} };
      res = { send: jest.fn() };

      await userController.signUp(req, res);
      expect(res.send.mock.calls[0][0].message).toBe('Register works');
    });
  });
});

describe('Given a login function', () => {
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    req = { user: { _id: 'id', login: 'login' } };
  });
  describe('When called with an user', () => {
    test('Then res.json should be called', () => {
      jwt.sign.mockReturnValue();

      userController.login(req, res);
      expect(res.json).toHaveBeenCalled();
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
    req = { user: {} };
  });
  describe('When is invoked when proper arguments', () => {
    test('Then res.json should be called ', async () => {
      User.create.mockResolvedValue(req.body);
      await userController.createOne(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked when wrong arguments', () => {
    test('Then res.send should be called ', async () => {
      User.create.mockRejectedValue();
      await userController.createOne(req, res);
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
      User.findByIdAndDelete.mockResolvedValue(req.params.userId);
      await userController.deleteOne(req, res);
      expect(res.send.mock.calls[0][0]).toBe('User deleted');
    });
  });
  describe('When is invoked with an invalid user', () => {
    test('Then res.status should be 500', async () => {
      User.findByIdAndDelete.mockRejectedValue();
      await userController.deleteOne(req, res);
      expect(res.status.mock.calls[0][0]).toBe(500);
    });
  });
});
