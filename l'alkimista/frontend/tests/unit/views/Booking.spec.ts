import { mount } from "@vue/test-utils";
import Booking from "../../../src/views/Booking.vue";

describe("Given a Booking view", () => {
  describe("When is rendered", () => {
    test("Then 'Reservar' should be printed", () => {
      const wrapper = mount(Booking);
      expect(wrapper.html()).toContain("Reservar");
    });
  });
});
