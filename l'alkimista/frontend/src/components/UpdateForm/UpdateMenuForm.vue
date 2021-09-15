<template>
  <div class="update-menu">
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="name" name="name" />
    </div>
    <h5 for="dishes">Dishes:</h5>
    <label for="dish" v-for="element in dishes" :key="element">
      <input type="checkbox" name="dish" />{{ element.name }}
    </label>
    <label for="price">Price</label>

    <input type="text" v-model="price" @input="unconfirm" />
    <div>
      <label for="confirm">Confirm</label>
      <input
        id="confirm"
        type="checkbox"
        name="confirm"
        v-model="confirm"
        @change="setDataAtStore"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import setDataAtStore from "../../utils/SetDataAtStore";
import unconfirm from "../../utils/Unconfirm";

export default {
  data: () => ({
    name: "",
    newDishes: [],
    price: 0,
  }),
  computed: {
    ...mapState(["dishes"]),
  },
  methods: {
    ...mapActions(["setDataToSend"]),

    setDataAtStore,
    unconfirm,
    createObjectToSend() {
      return {
        name: this.name,
        dishes: this.newDishes,
        price: parseFloat(this.price),
      };
    },
  },
};
</script>
<style scooped>
.update-menu {
  display: flex;
  flex-direction: column;
}
</style>
