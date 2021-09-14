/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { mount } from "@vue/test-utils";
import Wines from "../../../src/views/Wines.vue";
import router from "../../../src/router";
import state from "../../mockedState";

describe("Given an CreateDishesForm component", () => {
  describe("When is rendered", () => {
    test("Then a header tag should be printed", () => {
      const wrapper = mount(Wines, {
        props: {
          action: "Create",
          category: "Dishes",
        },

        global: {
          plugins: [router],
          mocks: {

            methods: {

            },
            $store: {
              state,

              actions: {
                fetchWinesFromApi: [{ name: "", _id: "" }],

              },
              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
      expect(wrapper.html()).toContain("<ul>");
    });
  });
});
