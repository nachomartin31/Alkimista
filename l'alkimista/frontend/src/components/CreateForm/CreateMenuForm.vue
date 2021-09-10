<template>
  <div>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" />
    </div>
    <div class="create-menu">
      <h5 for="dishes">Dishes:</h5>
      <label for="dish" v-for="element in dishes" :key="element">
        <input type="checkbox" name="dish" value="element" />{{ element.name }}
      </label>
    </div>
    <div>
      <div>
        <label for="price">Price</label>
        <input type="text" name="price" />
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
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    name: "",
    menuDishes: [],
    price: 0,
    confirm: false,
  }),
  computed: {
    ...mapState(["dishes"]),
  },
  methods: {
    ...mapActions(["setDataToSend"]),
    createDishesObjectToSend() {
      const data = {
        name: this.name,
        dishes: this.menuDishes,
        price: parseFloat(this.price),
      };
      return data;
    },
    setDataAtStore() {
      if (this.confirm) {
        this.setDataToSend(this.createDishesObjectToSend());
      } else {
        this.setDataToSend({});
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
