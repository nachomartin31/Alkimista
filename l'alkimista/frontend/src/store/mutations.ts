/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  State, dishes, menus, wines, user,
} from "../types/newInterface";

const mutations = {
  loadDishes(state: State, payload: Array<dishes>) {
    state.dishes = payload;
  },
  loadMenus(state: State, payload: Array<menus>) {
    state.menus = payload;
  },
  loadWines(state: State, payload: Array<wines>) {
    state.wines = payload;
  },
  loadOneDish(state: State, payload: dishes) {
    state.currentDish = payload;
  },
  loadOneWine(state: State, payload: wines) {
    state.currentWine = payload;
  },
  loadUser(state: State, payload: {user: user | string, token: string}) {
    state.token = payload.token;
    state.user = payload.user;
  },
  getCurrentCategory(state: State, currentCategory: string) {
    let getState: Array<dishes> | Array<menus> | Array<wines> | [] = [];
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
  setDataState(state: State, data: Object) {
    state.dataToSend = data;
  },
  stageElementAsState(state: State, element: string) {
    state.currentElementId = element;
  },
  stageFiltersAtStore(state: State, payload: Array<String> | []) {
    state.tags = payload;
  },
};

export default mutations;
