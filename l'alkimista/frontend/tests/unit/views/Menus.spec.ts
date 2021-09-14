/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { mount } from "@vue/test-utils";
import Menus from "../../../src/views/Menus.vue";
import state from "../../mockedState";

describe("Given a Menus view", () => {
  describe("When is rendered", () => {
    test("Then a input tag should be printed", () => {
      const wrapper = mount(Menus, {
        data() {
          return {
            newTags: ["vegan"],
            filtered: [{ name: "13", _id: " 123", tag: ["vegan"] }, { name: "15", _id: " 13" }],
          };
        },
        global: {
          mocks: {

            methods: {
            },
            $store: {
              state,
              actions: {
                fetchMenusFromApi: [{ name: "", _id: "" }],
              },
              commit: jest.fn(),
              dispatch: jest.fn(),
              getters: {
                filterDishes: () => [{ name: "", _id: "" }],
              },
            },
          },
        },
      });
      expect(wrapper.html()).toContain("<section");
    });
  });
});
