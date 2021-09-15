/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  State, Dishes, Menus, Wines, User,
} from "../types/newInterface";

const mutations = {
  loadDishes(state: State, payload: Array<Dishes>) {
    state.dishes = payload;
  },
  loadMenus(state: State, payload: Array<Menus>) {
    state.menus = payload;
  },
  loadWines(state: State, payload: Array<Wines>) {
    state.wines = payload;
  },
  loadOneDish(state: State, payload: Dishes) {
    state.currentDish = payload;
  },
  loadOneWine(state: State, payload: Wines) {
    state.currentWine = payload;
  },
  loadUser(state: State, payload: {user: User | string, token: string}) {
    state.token = payload.token;
    state.user = payload.user;
  },
  getCurrentCategory(state: State, currentCategory: string) {
    let getState: Array<Dishes> | Array<Menus> | Array<Wines> | [] = [];
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
  stageFiltersAtStore(state: State, payload: Array<string> | []) {
    state.tags = payload;
  },
};

export default mutations;
