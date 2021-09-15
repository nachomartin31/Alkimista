/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import state from "../../mockedState";
import getters from "../../../src/store/getters";

describe("Given a getters module", () => {
  describe("When a filterDishes function is invoked", () => {
    test("filterDishes should return a proper array with 3 tags", () => {
      const { filterDishes } = getters;

      state.tags = ["12", "23", "34"];
      expect(filterDishes(state)).toEqual([{
        _id: "123",
        name: "dish1",
        image: "",
        descriptionCat: "a",
        descriptionSpa: "",
        ingredientsCat: ["", "", ""],
        ingredientsSpa: ["", "", ""],
        tags: ["12", "23", "34"],
        price: 12,
      }]);
    });
    test("filterDishes should return a proper array with 2 tags", () => {
      const { filterDishes } = getters;
      state.tags = ["12", "23"];
      expect(filterDishes(state)).toEqual([{
        _id: "123",
        name: "dish1",
        image: "",
        descriptionCat: "a",
        descriptionSpa: "",
        ingredientsCat: ["", "", ""],
        ingredientsSpa: ["", "", ""],
        tags: ["12", "23", "34"],
        price: 12,
      }]);
    });
    test("filterDishes should return a proper array with 1 tag", () => {
      const { filterDishes } = getters;
      state.tags = ["12"];
      expect(filterDishes(state)).toEqual([{
        _id: "123",
        name: "dish1",
        image: "",
        descriptionCat: "a",
        descriptionSpa: "",
        ingredientsCat: ["", "", ""],
        ingredientsSpa: ["", "", ""],
        tags: ["12", "23", "34"],
        price: 12,
      }]);
    });
    test("filterDishes should return a proper array with no tags", () => {
      const { filterDishes } = getters;
      state.tags = [];
      expect(filterDishes(state)).toEqual([{
        _id: "123",
        name: "dish1",
        image: "",
        descriptionCat: "a",
        descriptionSpa: "",
        ingredientsCat: ["", "", ""],
        ingredientsSpa: ["", "", ""],
        tags: ["12", "23", "34"],
        price: 12,
      },

      {
        _id: "234",
        name: "dish2",
        image: "",
        descriptionCat: "a",
        descriptionSpa: "",
        ingredientsCat: ["", "", ""],
        ingredientsSpa: ["", "", ""],
        tags: ["", "", ""],
        price: 12,
      },
      {
        _id: "345",
        name: "dish3",
        image: "",
        descriptionCat: "a",
        descriptionSpa: "",
        ingredientsCat: ["", "", ""],
        ingredientsSpa: ["", "", ""],
        tags: ["", "", ""],
        price: 12,
      }]);
    });
  });
});

describe("", () => {
  describe("", () => {
    test("", () => {
      expect(getters.setCurrentCategory(state)).toEqual([]);
    });
  });
});
