import { mount } from "@vue/test-utils";
import CreateDishesForm from "../../src/components/CreateForm/CreateDishesForm.vue";

describe("Given an CreateDishesForm component", () => {
  describe("When is rendered", () => {
    test("Then a header tag should be printed", () => {
      const wrapper = mount(CreateDishesForm);
      expect(wrapper.html()).toContain("<input type=");
    });
  });
});
