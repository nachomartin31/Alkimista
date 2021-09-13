/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { dishes, State } from "../types/newInterface";

const getters = {
  setCurrentCategory(state: State) {
    return state.currentState;
  },
  filterDishes(state: State): Array<dishes> | [] {
    let filteredDishes: dishes[] = [];
    const currentTags:Array<String> | [] = state.tags;
    if (currentTags.length === 0) {
      filteredDishes = state.dishes;
    } else if (currentTags.length === 1) {
      const firstTag: String = currentTags[0];
      filteredDishes = state.dishes.filter((dish) => dish
        .tags.includes(firstTag));
    } else if (currentTags.length === 2) {
      const firstTag: String = currentTags[0];
      const secondTag: String = currentTags[1];

      filteredDishes = state.dishes.filter((dish) => dish
        .tags.includes(firstTag) && dish
        .tags.includes(secondTag));
    } else if (currentTags.length === 3) {
      const firstTag: String = currentTags[0];
      const secondTag: String = currentTags[1];
      const thirdTag: String = currentTags[1];

      filteredDishes = state.dishes.filter((dish) => dish
        .tags.includes(firstTag) && dish
        .tags.includes(secondTag) && dish.tags.includes(thirdTag));
    }

    return filteredDishes;
  },
};

export default getters;
