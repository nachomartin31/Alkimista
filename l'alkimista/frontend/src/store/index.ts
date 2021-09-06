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
    user: null,
    token: "",
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
    loadUser(state, payload) {
      state.token = payload.token;
      state.user = payload.user;
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
    async fetchUser({ commit }, user) {
      const { data } = await axios.post("http://localhost:5001/api/users/login", user);

      commit("loadUser", { token: data.token, user: data.user });
    },
  },
  modules: {
  },
});
