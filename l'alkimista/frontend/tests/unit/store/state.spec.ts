/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import state from "../../../src/store/state";

describe("Given a state", () => {
  test("It should be like this one", () => {
    expect(state).toEqual({
      dishes: [],
      menus: [],
      wines: [],
      currentDish: {},
      currentWine: {},
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : "",
      token: localStorage.getItem("token") || "",
      currentState: [],
      dataToSend: {},
      currentElementId: "",
      tags: [],
    });
  });
});
