/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { mount } from "@vue/test-utils";
import CreateMenuForm from "../../../src/components/CreateForm/CreateMenuForm.vue";
import state from "../../mockedState";

jest.mock("../../../src/utils/setDataAtStore.js");
describe("Given an CreateMenuForm component", () => {
  describe("When is rendered", () => {
    test("Then a header tag should be printed", () => {
      const wrapper = mount(CreateMenuForm);
      expect(wrapper.html()).toContain("<input type=");
    });
  });
  describe("When confirm checkbox is checked", () => {
    test("Then createObjectToSend should be called", async () => {
      const createObjectToSend = jest.fn();
      const addDishToSend = jest.fn();
      const wrapper = mount(CreateMenuForm, {
        props: {
          action: "Create",
          category: "Menus",
        },

        global: {
          mocks: {
            data: {
              name: "",
              menuDishes: [],
              price: "",
              confirm: false,
            },
            methods: {
              createObjectToSend,
              addDishToSend,
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
      const checkbox = wrapper.find("#dish");
      await checkbox.trigger("click");
      createObjectToSend();
      expect(wrapper.html()).toContain("<input type=");
    });
  });
});
