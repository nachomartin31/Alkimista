const state = {
  dishes: [],
  menus: [],
  wines: [],
  currentDish: {},
  currentWine: {},
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : "",
  token: localStorage.getItem("token") || "",
  currentState: [],
  dataToSend: {},
  currentElementId: "",
  tags: [],
};
export default state;
