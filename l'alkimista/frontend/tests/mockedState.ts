const state = {
  dishes: [
    {
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
    },
  ],
  menus: [
    {
      _id: "123",
      name: "menu1",
      dishes: ["123", "234"],
      tags: ["", "", ""],
      price: 12,

    },

  ],

  wines: [
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
  currentDish:
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
  currentWine: {
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
  user: "",
  token: "1231412",
  currentState: [],
  dataToSend: {
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
  currentElementId: "1231",
  tags: ["12", "23", "34"],
};

export default state;
