import { createStore } from "vuex";

export default createStore({
  state: {
    dishes: [
      "Tomàquet",
      "Croissant pulled-pork",
      "Rock&Roll, gambes i kimchi",
    ],
  },
  getters: {
    getDishes(state) {
      return state.dishes;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
