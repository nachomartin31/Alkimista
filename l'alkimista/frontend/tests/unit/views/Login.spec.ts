/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { mount } from "@vue/test-utils";
import state from "../../mockedState";
import Login from "../../../src/views/Login.vue";

describe("Given a Login view", () => {
  describe("When render", () => {
    test("Then a main tag should be printed", () => {
      const logIn = jest.fn();
      const logOut = jest.fn();
      const wrapper = mount(Login, {
        global: {
          mocks: {
            data: {
              login: "",
              password: "",
              error: false,
              noUser: "",
              action: "Category",
            },
            methods: {
              logIn,
              logOut,
            },
            $store: {
              state,
              actions: {
                fetchDishesFromApi: jest.fn(),
                fetchMenusFromApi: jest.fn(),
                fetchWinesFromApi: jest.fn(),
                fetchUserFromApi: jest.fn(),
                setCategory: jest.fn(),
              },
              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
      expect(wrapper.html()).toContain("<main>");
    });
  });
});
