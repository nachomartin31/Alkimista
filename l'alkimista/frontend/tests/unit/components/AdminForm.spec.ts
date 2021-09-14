/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { mount } from "@vue/test-utils";
import toast from "vue-dk-toast";
import state from "../../mockedState";
import AdminForm from "../../../src/components/AdminForm.vue";

describe("Given an AdminForm component", () => {
  describe("When is rendered", () => {
    test("Then a form tag should be printed", () => {
      const wrapper = mount(AdminForm);
      expect(wrapper.html()).toContain("</form>");
    });
  });

  describe("When is rendered", () => {
    test("Then submitData should be called", async () => {
      const submitData = jest.fn();
      const changeCurrentElement = jest.fn();
      const wrapper = mount(AdminForm, {
        props: {
          action: "Create",
          category: "Dishes",
        },

        global: {
          plugins: [toast],
          mocks: {
            data: {
              thereisAnObject: false,

            },
            methods: {
              submitData,
              changeCurrentElement,
            },
            $store: {
              state: {
                ...state,
              },
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
      console.log(wrapper.html());
      await wrapper.find("form").trigger("submit.prevent");

      submitData();
      expect(submitData).toHaveBeenCalled();
    });
  });
});
