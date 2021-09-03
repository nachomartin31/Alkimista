import { mount } from "@vue/test-utils";
import AppHeader from "../../src/components/AppHeader.vue";

describe("Given an AppHeader component", () => {
  describe("When is rendered", () => {
    test("Then a header tag should be printed", () => {
      const wrapper = mount(AppHeader);
      expect(wrapper.html()).toContain("<header>");
    });
  });
});
