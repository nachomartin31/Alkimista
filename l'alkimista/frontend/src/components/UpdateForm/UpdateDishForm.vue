<template>
  <div>
    <div>
      <label for="name">Name:</label>
      <input type="text" name="name" v-model="name" autocomplete="off" />
    </div>
    <div>
      <label for="image">Image:</label>
      <input type="file" name="image" />
    </div>
    <div>
      <label for="descriptionCat">Description in catalan:</label>
      <input type="text" name="descriptionCat" v-model="descriptionCat" />
    </div>
    <div>
      <label for="descriptionSpa">Description in spanish:</label>
      <input type="text" name="descriptionSpa" v-model="descriptionSpa" />
    </div>
    <div>
      <label for="ingredientsCat">Ingredients in catalan:</label>
      <input type="text" name="ingredentsCat" v-model="ingredentsCat" />
    </div>
    <div>
      <label for="ingredientsSpa">Ingredients in spanish:</label>
      <input type="text" name="ingredentsSpa" v-model="ingredentsSpa" />
    </div>
    <div>
      <label for="tags">Preferences:</label>
      <div>
        <label for="tags">Glutten-free</label>
        <input type="checkbox" />
        <label for="tags">Proximity</label>
        <input type="checkbox" />
        <label for="tags">Vegan</label>
        <input type="checkbox" />
      </div>
    </div>
    <label for="price">Price</label>
    <input type="text" name="price" v-model="price" />
    <div>
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
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentObject"]),
  },
  data: () => ({
    name: "",
    image: "",
    descriptionCat: "",
    descriptionSpa: "",
    ingredientsCat: "",
    ingredientsSpa: "",
    tags: [],
    price: 0,
    confirm: false,
  }),

  methods: {
    ...mapActions(["setDataToSend"]),
    createDishesObjectToSend() {
      return {
        name: this.name,
        image: this.image,
        descriptionCat: this.descriptionCat,
        descriptionSpa: this.descriptionSpa,
        ingredientsCat: this.ingredientsCat.split(","),
        ingredientsSpa: this.ingredientsSpa.split(", "),
        tags: this.tags,
        price: parseFloat(this.price),
      };
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
