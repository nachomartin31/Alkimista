const state = {
  dishes: [
    {
      _id: "123",
      name: "dish1",
      image: "",
      descriptionCat: "a",
      descriptionSpa: "",
      ingredientsCat: ["qw", "dqw", "qwd"],
      tags: ["12", "23", "34"],
      price: 12,
      ingredientsSpa: ["qwdf", "cqq", "qw2"],
    },

    {
      _id: "234",
      name: "dish2",
      ingredientsSpa: ["", "", ""],
      image: "",
      descriptionCat: "b",
      descriptionSpa: "dq",
      ingredientsCat: ["khq", "lkhq", "ihq"],
      tags: ["qw", "dw", "q12d"],
      price: 12,
    },
    {
      _id: "345",
      name: "dish3",
      image: "",
      descriptionCat: "c",
      descriptionSpa: "jq",
      ingredientsCat: ["qwd", "qwc", "csq"],
      ingredientsSpa: ["asq", "ca", "caa"],
      tags: ["vt", "uiy", "aq"],
      price: 16,
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
      DO: "String",
      grapeTypes: [" Array<String>", " Array<String>"],
      year: 2019,
      bottlePrice: 32,
      glassPrice: 4,

    },

    {
      _id: "String",
      name: "String",
      year: 2019,
      vinery: "String",
      type: "String",
      DO: "String",
      grapeTypes: [" Array<String>", " Array<String>"],
      bottlePrice: 32,
      glassPrice: 4,
    },

  ],
  currentDish:
  {
    _id: "345",
    descriptionSpa: "",
    name: "dish3",
    image: "",
    descriptionCat: "a",
    ingredientsSpa: ["", "", ""],
    tags: ["", "", ""],
    price: 12,
    ingredientsCat: ["sd", "", ""],
  },
  currentWine: {
    _id: "sds",
    name: "Stsdffring",
    vinery: "Ssqtring",
    type: "Strgring",
    DO: "Stssring",
    grapeTypes: [" Array<ddfString>", " Arrvwway<String>"],
    bottlePrice: 32,
    year: 2019,
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
    grapeTypes: [" Array<232String>", " Array<Stgr3ring>"],
    bottlePrice: 32,
    glassPrice: 4,
  },
  currentElementId: "1231",
  tags: ["12", "23", "34"],
};

export default state;
