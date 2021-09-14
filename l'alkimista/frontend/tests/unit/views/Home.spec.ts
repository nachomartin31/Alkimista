import { mount } from "@vue/test-utils";
import Home from "../../../src/views/Home.vue";

describe("Given a Home view", () => {
  describe("When rendered", () => {
    test("Then an article tag should be printed", () => {
      const wrapper = mount(Home);
      expect(wrapper.html()).toContain("<article>");
    });
  });
});
