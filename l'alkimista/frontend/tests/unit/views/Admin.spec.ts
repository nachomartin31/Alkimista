/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { mount } from "@vue/test-utils";
import Admin from "../../../src/views/Login.vue";
import state from "../../mockedState";

describe("Given an Admin view", () => {
  describe("When rendered ", () => {
    test("Then a main tag should be printed", () => {
      const wrapper = mount(Admin, {
        props: {
          action: "Create",
          category: "Dishes",
        },
        data() {
          return {
            login: "",
            password: "",
            error: false,
            noUser: "",
            action: "Category",
          };
        },
        global: {
          mocks: {
            data: {
              thereisAnObject: false,

            },
            methods: {

            },
            $store: {
              state: {
                state,
              },
              actions: {
                sendDataToBackend: jest.fn(),
                stageCurrentElement: jest.fn(),
              },
              getters: {
                setCurrentCategory: jest.fn(),
              },

              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
      expect(wrapper.html()).toContain("<main");
    });
  });
});
