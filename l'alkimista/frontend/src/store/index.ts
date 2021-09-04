/* eslint-disable no-param-reassign */
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    dishes: [],
    menus: [

    ],
  },
  getters: {

  },
  mutations: {
    loadDishes(state, payload) {
      state.dishes = payload;
    },
  },
  actions: {
    async fetchDishesFromApi({ commit }) {
      const { data } = await axios.get("http://localhost:5001/api/dishes/");

      commit("loadDishes", data);
    },
  },
  modules: {
  },
});
