<template>
  <div>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" @input="unconfirm" />
    </div>
    <div class="create-menu">
      <h5 for="dishes">Dishes:</h5>
      <label for="dish" v-for="element in dishes" :key="element">
        <input
          type="checkbox"
          name="dish"
          value="element"
          @click="addDishToMenu(element)"
          @change="unconfirm"
        />{{ element.name }}
      </label>
    </div>
    <div>
      <div>
        <label for="price">Price</label>
        <input @input="unconfirm" type="text" name="price" v-model="price" />
      </div>
      <label for="confirm">Confirm</label>
      <input
        type="checkbox"
        name="confirm"
        v-model="confirm"
        @change="setDataAtStore"
      />
    </div>
  </div>
</template>
<script>
/* eslint-disable no-underscore-dangle */

import { mapState, mapActions } from "vuex";
import setDataAtStore from "../../utils/SetDataAtStore";
import unconfirm from "../../utils/Unconfirm";

export default {
  data: () => ({
    name: "",
    menuDishes: [],
    price: "",
    confirm: false,
  }),
  computed: {
    ...mapState(["dishes"]),
  },
  methods: {
    ...mapActions(["setDataToSend"]),
    setDataAtStore,
    unconfirm,
    createObjectToSend() {
      const data = {
        name: this.name,
        dishes: this.menuDishes,
        price: parseFloat(this.price),
      };
      return data;
    },
    addDishToMenu(newDish) {
      if (this.menuDishes.some((dish) => dish === newDish._id)) {
        this.menuDishes = this.menuDishes.filter(
          // eslint-disable-next-line comma-dangle
          (dish) => dish !== newDish._id
        );
      } else {
        this.menuDishes.push(newDish._id);
      }
    },
  },
};
</script>
<style scooped>
.create-menu {
  display: flex;
  flex-direction: column;
}
</style>
