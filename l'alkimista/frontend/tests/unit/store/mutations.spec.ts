/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import mutations from "@/store/mutations";
import { State } from "../../../src/types/newInterface";
import state from "../../mockedState";

let mockedState: State;

describe("Given a mutations module", () => {
  beforeEach(() => {
    mockedState = state;
  });
  test("Load dishes should be", () => {
    const payLoad = [
      {
        _id: "123",
        name: "dish1",
        image: "",
        descriptionCat: "a",
        descriptionSpa: "",
        ingredientsCat: ["", "", ""],
        ingredientsSpa: ["", "", ""],
        tags: ["", "", ""],
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
    ];
    mutations.loadDishes(mockedState, payLoad);
    expect(mockedState.dishes).toStrictEqual(
      [
        {
          _id: "123",
          name: "dish1",
          image: "",
          descriptionCat: "a",
          descriptionSpa: "",
          ingredientsCat: ["", "", ""],
          ingredientsSpa: ["", "", ""],
          tags: ["", "", ""],
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
      ],
    );
  });
  test("Load Menus should be", () => {
    const payLoad = [
      {
        _id: "123",
        name: "dish1",
        dishes: ["12", "123"],
        price: 12,
      },
      {
        _id: "123",
        name: "dish1",
        dishes: ["12", "123"],
        price: 12,
      },
    ];
    mutations.loadMenus(mockedState, payLoad);
    expect(mockedState.menus).toStrictEqual(
      [
        {
          _id: "123",
          name: "dish1",
          dishes: ["12", "123"],
          price: 12,
        },
        {
          _id: "123",
          name: "dish1",
          dishes: ["12", "123"],
          price: 12,
        },
      ],
    );
  });

  test("Load Wines should be", () => {
    const payLoad = [
      {
        _id: "String",
        name: "String",
        vinery: "String",
        type: "String",
        year: 2019,
        DO: "String",
        grapeTypes: [" Array<String>", " Array<String>"],
        bottlePrice: 32,
        glassPrice: 4,

      },
    ];
    mutations.loadWines(mockedState, payLoad);
    expect(mockedState.wines).toStrictEqual(
      [
        {
          _id: "String",
          name: "String",
          vinery: "String",
          type: "String",
          year: 2019,
          DO: "String",
          grapeTypes: [" Array<String>", " Array<String>"],
          bottlePrice: 32,
          glassPrice: 4,

        },
      ],
    );
  });

  test("Load one dish should be", () => {
    const payLoad = {
      _id: "345",
      name: "dish3",
      image: "",
      descriptionCat: "a",
      descriptionSpa: "",
      ingredientsCat: ["", "", ""],
      ingredientsSpa: ["", "", ""],
      tags: ["", "", ""],
      price: 12,
    };
    mutations.loadOneDish(mockedState, payLoad);
    expect(mockedState.currentDish).toStrictEqual(
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
      },

    );
  });

  test("Load one wine should be", () => {
    const payLoad = {
      _id: "String",
      name: "String",
      vinery: "String",
      type: "String",
      year: 2019,
      DO: "String",
      grapeTypes: [" Array<String>", " Array<String>"],
      bottlePrice: 32,
      glassPrice: 4,
    };
    mutations.loadOneWine(mockedState, payLoad);
    expect(mockedState.currentWine).toStrictEqual(
      {
        _id: "String",
        name: "String",
        vinery: "String",
        type: "String",
        year: 2019,
        DO: "String",
        grapeTypes: [" Array<String>", " Array<String>"],
        bottlePrice: 32,
        glassPrice: 4,
      },
    );
  });
  test("Load user should be", () => {
    const payLoad = {
      user: "",
      token: "1231412",
    };
    mutations.loadUser(mockedState, payLoad);
    expect(mockedState.user).toStrictEqual(
      "",

    );
  });

  test("Get currentState with '' should be", () => {
    const payLoad = "";
    mutations.getCurrentCategory(mockedState, payLoad);
    expect(mockedState.currentState).toStrictEqual(
      [],
    );
  });

  test("Get currentState with 'Dishes' should be", () => {
    const payLoad = "Dishes";
    mutations.getCurrentCategory(mockedState, payLoad);
    expect(mockedState.currentState).toStrictEqual(
      state.dishes,

    );
  });

  test("Get currentState with 'Menus' should be", () => {
    const payLoad = "Menus";
    mutations.getCurrentCategory(mockedState, payLoad);
    expect(mockedState.currentState).toStrictEqual(
      state.menus,
    );
  });
  test("Get currentState with 'Wines' should be", () => {
    const payLoad = "Wines";
    mutations.getCurrentCategory(mockedState, payLoad);
    expect(mockedState.currentState).toStrictEqual(
      state.wines,
    );
  });

  test("setDataState should be", () => {
    const payLoad = {
      _id: "String",
      name: "String",
      vinery: "String",
      type: "String",
      year: 2019,
      DO: "String",
      grapeTypes: [" Array<String>", " Array<String>"],
      bottlePrice: 32,
      glassPrice: 4,
    };
    mutations.setDataState(mockedState, payLoad);
    expect(mockedState.dataToSend).toStrictEqual(
      {
        _id: "String",
        name: "String",
        vinery: "String",
        type: "String",
        year: 2019,
        DO: "String",
        grapeTypes: [" Array<String>", " Array<String>"],
        bottlePrice: 32,
        glassPrice: 4,
      },
    );
  });

  test("currentElementId should be", () => {
    const payLoad = "1231";
    mutations.stageElementAsState(mockedState, payLoad);
    expect(mockedState.currentElementId).toStrictEqual(
      "1231",
    );
  });
  test("currentElementId should be", () => {
    const payLoad = ["12", "23", "34"];
    mutations.stageFiltersAtStore(mockedState, payLoad);
    expect(mockedState.tags).toStrictEqual(
      ["12", "23", "34"],
    );
  });
});
