/* eslint-disable no-param-reassign */
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    dishes: [],
    menus: [],
    wines: [],
    currentDish: {},
    currentWine: {},
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
    loadOneDish(state, payload) {
      state.currentDish = payload;
    },
    loadOneWine(state, payload) {
      state.currentWine = payload;
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

    async fetchOneDish({ commit }, id) {
      const { data } = await axios.get(`http://localhost:5001/api/dishes/${id}`);

      commit("loadOneDish", data);
    },
    async fetchOneWine({ commit }, id) {
      const { data } = await axios.get(`http://localhost:5001/api/wines/${id}`);

      commit("loadOneWine", data);
    },
  },
  modules: {
  },
});
