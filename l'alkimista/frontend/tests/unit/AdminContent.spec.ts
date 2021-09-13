import { mount } from "@vue/test-utils";
import AdminContent from "../../src/components/AdminContent.vue";

describe("Given an AdminContent component", () => {
  describe("When is rendered", () => {
    test("Then a select tag should be printed", () => {
      const wrapper = mount(AdminContent);
      expect(wrapper.html()).toContain("<option>");
    });
  });
});
