/* eslint-disable no-param-reassign */
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    dishes: [],
    menus: [],
    wines: [],
  },
  getters: {

  },
  mutations: {
    loadDishes(state, payload) {
      state.dishes = payload;
    },
    loadMenus(state, payload) {
      state.menus = payload;
    },
    loadWines(state, payload) {
      state.wines = payload;
    },
  },
  actions: {
    async fetchDishesFromApi({ commit }) {
      const { data } = await axios.get("http://localhost:5001/api/dishes/");

      commit("loadDishes", data);
    },
    async fetchMenusFromApi({ commit }) {
      const { data } = await axios.get("http://localhost:5001/api/menu");
      commit("loadMenus", data);
    },
    async fetchWinesFromApi({ commit }) {
      const { data } = await axios.get("http://localhost:5001/api/wines");

      commit("loadWines", data);
    },
  },
  modules: {
  },
});
