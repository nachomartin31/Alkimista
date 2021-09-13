import { mount } from "@vue/test-utils";
import AppFooter from "../../src/components/AppFooter.vue";

describe("Given an AppFooter component", () => {
  describe("When is rendered", () => {
    test("Then a footer tag should be printed", () => {
      const wrapper = mount(AppFooter);
      expect(wrapper.html()).toContain("<footer>");
    });
  });
});
