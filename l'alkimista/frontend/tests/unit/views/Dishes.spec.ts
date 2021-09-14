/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { mount } from "@vue/test-utils";
import Dishes from "../../../src/views/Dishes.vue";
import state from "../../mockedState";

describe("Given a dishes view", () => {
  describe("When is rendered", () => {
    test("Then a tag 'main' should be printed", () => {
      const addTag = jest.fn();
      const wrapper = mount(Dishes, {
        data() {
          return {
            newTags: ["vegan"],
            filtered: [{ name: "13", _id: " 123", tag: ["vegan"] }, { name: "15", _id: " 13" }],
          };
        },
        global: {
          mocks: {

            methods: {
              addTag,
            },
            $store: {
              state,
              actions: {
                fetchDishesFromApi: [{ name: "", _id: "" }],
                getDishesFilter: jest.fn(),
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
      console.log(wrapper.html());

      expect(wrapper.html()).toContain("<main>");
    });
  });
});
