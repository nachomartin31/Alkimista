/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import { ActionContext } from "vuex";
import axios from "axios";
import CryptoJS from "crypto-js";
import {
  State,
} from "../types/newInterface";

const actions = {
  async fetchDishesFromApi({ commit }:ActionContext<State, State>) {
    const { data } = await axios.get("http://localhost:5001/api/dishes/");
    commit("loadDishes", data);
  },
  async fetchMenusFromApi({ commit }:ActionContext<State, State>) {
    const { data } = await axios.get("http://localhost:5001/api/menu");
    commit("loadMenus", data);
  },
  async fetchWinesFromApi({ commit }:ActionContext<State, State>) {
    const { data } = await axios.get("http://localhost:5001/api/wines");

    commit("loadWines", data);
  },

  async fetchOneDish({ commit }:ActionContext<State, State>, id: string) {
    const { data } = await axios.get(`http://localhost:5001/api/dishes/${id}`);

    commit("loadOneDish", data);
  },
  async fetchOneWine({ commit }:ActionContext<State, State>, id: string) {
    const { data } = await axios.get(`http://localhost:5001/api/wines/${id}`);

    commit("loadOneWine", data);
  },
  async fetchUser({ commit }:ActionContext<State, State>, user: object) {
    if (user) {
      const { data } = await axios.post("http://localhost:5001/api/users/login", user);
      localStorage.setItem("user", JSON.stringify(data.user.name));
      const encryptedToken = CryptoJS
        .AES.encrypt(data.token, process.env.VUE_APP_SECRET).toString();
      localStorage.setItem("token", encryptedToken);

      commit("loadUser", { token: data.token, user: data.user.name });
    }
  },
  setCategory({ commit }:ActionContext<State, State>, category: string) {
    commit("getCurrentCategory", category);
  },
  setDataToSend({ commit }:ActionContext<State, State>, data: object) {
    commit("setDataState", data);
  },
  async sendDataToBackend({ dispatch }: any, strategy: any) {
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
            await axios.post("http://localhost:5001/api/wines", element, { headers: { Authorization: `Bearer ${token}` } });

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
  async stageCurrentElement({ commit }:ActionContext<State, State>, id: string) {
    commit("stageElementAsState", id);
  },
  getDishesFilter({ commit }:ActionContext<State, State>, tags: Array<string> | []) {
    commit("stageFiltersAtStore", tags);
  },
};

export default actions;
