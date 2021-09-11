/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import { createStore } from "vuex";
import axios from "axios";
import CryptoJS from "crypto-js";
import State from "../types/interfaces";

export default createStore({
  state: {
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
  },
  getters: {
    setCurrentCategory(state: State) {
      return state.currentState;
    },
  },
  mutations: {
    loadDishes(state: State, payload) {
      state.dishes = payload;
    },
    loadMenus(state: State, payload) {
      state.menus = payload;
    },
    loadWines(state: State, payload) {
      state.wines = payload;
    },
    loadOneDish(state: State, payload) {
      state.currentDish = payload;
    },
    loadOneWine(state: State, payload) {
      state.currentWine = payload;
    },
    loadUser(state: State, payload) {
      state.token = payload.token;
      state.user = payload.user;
    },
    getCurrentCategory(state: State, currentCategory) {
      let getState;
      switch (currentCategory.toLowerCase()) {
        case "dishes":
          getState = state.dishes;
          break;
        case "menus":
          getState = state.menus;

          break;
        case "wines":
          getState = state.wines;

          break;
        default:
          break;
      }
      state.currentState = getState;
    },
    setDataState(state, data) {
      state.dataToSend = data;
    },
    stageElementAsState(state, element) {
      state.currentElementId = element;
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
    async fetchOneWine({ commit }, id: string) {
      const { data } = await axios.get(`http://localhost:5001/api/wines/${id}`);

      commit("loadOneWine", data);
    },
    async fetchUser({ commit }, user: object) {
      if (user) {
        const { data } = await axios.post("http://localhost:5001/api/users/login", user);
        localStorage.setItem("user", JSON.stringify(data.user.name));
        const encryptedToken = CryptoJS
          .AES.encrypt(data.token, process.env.VUE_APP_SECRET).toString();
        localStorage.setItem("token", encryptedToken);

        commit("loadUser", { token: data.token, user: data.user.name });
      }
    },
    setCategory({ commit }, category: string) {
      commit("getCurrentCategory", category);
    },
    setDataToSend({ commit }, data: object) {
      commit("setDataState", data);
    },
    async sendDataToBackend({ dispatch }, strategy) {
      console.log("the data: ", strategy.dataToSend);
      const element = strategy.dataToSend;
      const id = strategy.currentElementId;
      const encryptedToken: any = localStorage.getItem("token");
      const token = CryptoJS.AES.decrypt(
        encryptedToken,
        process.env.VUE_APP_SECRET,
      ).toString(CryptoJS.enc.Utf8);
      switch (strategy.category) {
        case "Dishes":
          switch (strategy.action) {
            case "Create":
              await axios.post("http://localhost:5001/api/dishes/", element, { headers: { Authorization: `Bearer ${token}` } });
              dispatch("fetchDishesFromApi");

              break;
            case "Update":
              await axios.put(`http://localhost:5001/api/dishes/${id}`, element, { headers: { Authorization: `Bearer ${token}` } });
              dispatch("fetchDishesFromApi");

              break;
            case "Delete":
              await axios.delete(`http://localhost:5001/api/dishes/${id}`, { headers: { Authorization: `Bearer ${token}` } });
              dispatch("fetchDishesFromApi");

              break;

            default:
              break;
          }
          break;
        case "Menus":
          switch (strategy.action) {
            case "Create":
              console.log(element);
              await axios.post("http://localhost:5001/api/menu/", element, { headers: { Authorization: `Bearer ${token}` } });
              dispatch("fetchMenusFromApi");

              break;
            case "Update":
              await axios.put(`http://localhost:5001/api/menu/${id}`, element, { headers: { Authorization: `Bearer ${token}` } });
              dispatch("fetchMenusFromApi");

              break;
            case "Delete":
              await axios.delete(`http://localhost:5001/api/menu/${id}`, element);
              dispatch("fetchMenusFromApi");

              break;

            default:
              break;
          }
          break;

        case "Wines":
          switch (strategy.action) {
            case "Create":
              await axios.post("http://localhost:5001/api/wines", element);

              break;
            case "Update":
              await axios.put(`http://localhost:5001/api/wines/${strategy.id}`, element, { headers: { Authorization: `Bearer ${token}` } });
              dispatch("fetchWinesFromApi");

              break;
            case "Delete":
              await axios.delete(`http://localhost:5001/api/wines/${strategy.id}`, element);
              dispatch("fetchWinesFromApi");

              break;

            default:
              break;
          }
          break;
        default:
          break;
      }
    },
    async stageCurrentElement({ commit }, id) {
      commit("stageElementAsState", id);
    },

  },

});
