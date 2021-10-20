/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from "axios";
import { Commit, Dispatch } from "vuex";
import CryptoJS from "crypto-js";
import actions from "../../../src/store/actions";
import {
  configActionContext,
  configActionContextAndDispatch,

} from "../../test-utils";

jest.mock("axios");
jest.mock("crypto-js");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest.MockedFunction<Commit>;
const dispatch = jest.fn() as jest.MockedFunction<Dispatch>;

describe("Given a fetchDishesFromApi function", () => {
  describe("When invoked", () => {
    test("'commit' shold have been called", async () => {
      mockedAxios.get.mockResolvedValue({ data: [] });
      await actions.fetchDishesFromApi(configActionContext(commit));
      expect(commit).toHaveBeenCalled();
    });
  });
});

describe("Given a fetchMenusFromApi function", () => {
  describe("When invoked", () => {
    test("'commit' shold have been called", async () => {
      mockedAxios.get.mockResolvedValue({ data: [] });
      await actions.fetchMenusFromApi(configActionContext(commit));
      expect(commit).toHaveBeenCalled();
    });
  });
});
describe("Given a fetchWinesFromApi function", () => {
  describe("When invoked", () => {
    test("'commit' shold have been called", async () => {
      mockedAxios.get.mockResolvedValue({ data: [] });
      await actions.fetchWinesFromApi(configActionContext(commit));
      expect(commit).toHaveBeenCalled();
    });
  });
});

describe("Given a fetchOneDish function", () => {
  describe("When invoked", () => {
    test("'commit' shold have been called", async () => {
      mockedAxios.get.mockResolvedValue({ data: [] });
      await actions.fetchOneDish(configActionContext(commit), "");
      expect(commit).toHaveBeenCalled();
    });
  });
});

describe("Given a fetchOneWine function", () => {
  describe("When invoked", () => {
    test("'commit' shold have been called", async () => {
      mockedAxios.get.mockResolvedValue({ data: [] });
      await actions.fetchOneWine(configActionContext(commit), "");
      expect(commit).toHaveBeenCalled();
    });
  });
});

describe("Given a fetchUser function", () => {
  describe("When invoked", () => {
    test("'CryptoJS.AES.encrypt' shold have been called", async () => {
      mockedAxios.post.mockResolvedValue({ data: { user: { name: "hgd" }, token: "hj" } });
      process.env.VUE_APP_SECRET = "dfa";
      CryptoJS.AES.encrypt = jest.fn().mockReturnValue({}.toString());
      await actions.fetchUser(configActionContext(commit), { user: { name: "" }, token: "" });
      expect(CryptoJS.AES.encrypt).toHaveBeenCalled();
    });
  });
});

describe("Given a setCategory function", () => {
  describe("When invoked", () => {
    test("'commit' shold have been called", async () => {
      mockedAxios.get.mockResolvedValue({ data: [] });
      await actions.setCategory(configActionContext(commit), "");
      expect(commit).toHaveBeenCalled();
    });
  });
});

describe("Given a setDataToSend function", () => {
  describe("When invoked", () => {
    test("'commit' shold have been called", async () => {
      mockedAxios.get.mockResolvedValue({ data: [] });
      await actions.setDataToSend(configActionContext(commit), {});
      expect(commit).toHaveBeenCalled();
    });
  });
});

describe("Given a setDataToSend function", () => {
  describe("When invoked", () => {
    test("'commit' shold have been called", async () => {
      mockedAxios.get.mockResolvedValue({ data: [] });
      await actions.setDataToSend(configActionContext(commit), {});
      expect(commit).toHaveBeenCalled();
    });
  });
});

describe("Given a sendDataToBackend function", () => {
  beforeEach(() => {
    CryptoJS.AES.decrypt = jest.fn().mockReturnValue("");
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("When invoked with category: dishes and action: create", () => {
    test("'dispatch' shold have been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Dishes", action: "Create",
      });
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("When invoked with category: dishes and action: update", () => {
    test("'dispatch' shold have been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Dishes", action: "Update",
      });
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with category: dishes and action: delete", () => {
    test("'dispatch' shold have been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Dishes", action: "Delete",
      });
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with category: Menus and action: create", () => {
    test("'dispatch' shold have been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Menus", action: "Create",
      });
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("When invoked with category: menus and action: update", () => {
    test("'dispatch' shold have been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Menus", action: "Update",
      });
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with category: menus and action: delete", () => {
    test("'dispatch' shold have been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Menus", action: "Delete",
      });
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with category: Wines and action: create", () => {
    test("'dispatch' shold have been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Wines", action: "Create",
      });
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("When invoked with category: Wines and action: update", () => {
    test("'dispatch' shold have been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Wines", action: "Update",
      });
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with category: Wines and action: delete", () => {
    test("'dispatch' shold have been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Wines", action: "Delete",
      });
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with category: Dishes and action: null", () => {
    test("'dispatch' shold have not been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Dishes", action: null,
      });
      expect(dispatch).toHaveBeenCalledTimes(0);
    });
  });

  describe("When invoked with category: Menus and action: null", () => {
    test("'dispatch' shold have not been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Menus", action: null,
      });
      expect(dispatch).toHaveBeenCalledTimes(0);
    });
  });
  describe("When invoked with category: Wines and action: null", () => {
    test("'dispatch' shold have not been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: "Wines", action: null,
      });
      expect(dispatch).toHaveBeenCalledTimes(0);
    });
  });

  describe("When invoked with category: null and action: null", () => {
    test("'dispatch' shold have not been called", async () => {
      await actions.sendDataToBackend(configActionContextAndDispatch(dispatch), {
        dataToSend: {}, currentElementId: "", category: null, action: null,
      });
      expect(dispatch).toHaveBeenCalledTimes(0);
    });
  });
});

describe("Given a stageCurrentElement function", () => {
  describe("When invoked", () => {
    test("'commit' shold have been called", async () => {
      mockedAxios.get.mockResolvedValue({ data: [] });
      await actions.stageCurrentElement(configActionContext(commit), "");
      expect(commit).toHaveBeenCalled();
    });
  });
});

describe("Given a getDishesFilter function", () => {
  describe("When invoked", () => {
    test("'commit' shold have been called", async () => {
      mockedAxios.get.mockResolvedValue({ data: [] });
      await actions.getDishesFilter(configActionContext(commit), [""]);
      expect(commit).toHaveBeenCalled();
    });
  });
});
