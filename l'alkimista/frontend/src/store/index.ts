import { createStore } from "vuex";

export default createStore({
  state: {
    dishes: [
      "Tomàquet",
      "Croissant pulled-pork",
      "Rock&Roll, gambes i kimchi",
    ],
    menus: [
      "Phi",
      "Lambda",
    ],
  },
  getters: {
    getDishes(state) {
      return state.dishes;
    },
    getMenus(state) {
      return state.menus;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
