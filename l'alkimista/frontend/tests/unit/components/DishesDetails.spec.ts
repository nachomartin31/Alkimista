/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { mount } from "@vue/test-utils";
import DishesDetails from "../../../src/views/DishesDetails.vue";
import state from "../../mockedState";
import router from "../../../src/router";

describe("Given a DishesDetails component", () => {
  describe("When is rendered", () => {
    test("Then a ul tag should be printed", () => {
      const wrapper = mount(DishesDetails, {
        props: {
          action: "Create",
          category: "Dishes",
        },

        global: {
          plugins: [router],
          mocks: {
            data: {
              thereisAnObject: false,

            },
            methods: {

            },
            params: "123",
            $store: {
              state,

              actions: {
                sendDataToBackend: jest.fn(),
                stageCurrentElement: jest.fn(),
              },
              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
      expect(wrapper.html()).toContain("Ingredients");
    });
  });
});
