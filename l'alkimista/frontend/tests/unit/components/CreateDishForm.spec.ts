/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { mount } from "@vue/test-utils";
import CreateDishesForm from "../../../src/components/CreateForm/CreateDishesForm.vue";
import state from "../../mockedState";

describe("Given an CreateDishesForm component", () => {
  describe("When is rendered", () => {
    test("Then a header tag should be printed", () => {
      const wrapper = mount(CreateDishesForm);
      expect(wrapper.html()).toContain("<input type=");
    });
  });
  describe("When confirm checkbox is checked", () => {
    test("Then createObjectToSend should be called", async () => {
      const wrapper = mount(CreateDishesForm, {
        props: {
          action: "Create",
          category: "Dishes",
        },

        global: {
          mocks: {
            data: {
              name: "",
              image: "",
              descriptionCat: "",
              descriptionSpa: "",
              ingredientsCat: "",
              ingredientsSpa: "",
              tags: [],
              price: "",
              confirm: false,

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
      const checkbox = wrapper.find("#confirm");
      await checkbox.trigger("click");
      expect(wrapper.html()).toContain("<input type=");
    });
  });
});
