import { mount } from "@vue/test-utils";
import AdminForm from "../../src/components/AdminForm.vue";

describe("Given an AdminForm component", () => {
  describe("When is rendered", () => {
    test("Then a header tag should be printed", () => {
      const wrapper = mount(AdminForm);
      expect(wrapper.html()).toContain("</form>");
    });
  });
  describe("When is rendered", () => {
    test("Then a header tag should be printed", async () => {
      const wrapper = mount(AdminForm);
      await wrapper.find("button").trigger("submit.prevent");
      expect(wrapper.emitted()).toHaveProperty("submit");
    });
  });
});
