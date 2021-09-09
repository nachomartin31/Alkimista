<template>
  <div>
    <div>
      <label for="name">Name:</label>
      <input type="text" name="name" v-model="name" />
    </div>
    <div>
      <label for="category">Category:</label>
      <input type="text" name="category" v-model="category" />
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
      <input type="text" name="ingredentsCat" v-model="ingredientsCat" />
    </div>
    <div>
      <label for="ingredientsSpa">Ingredients in spanish:</label>
      <input type="text" name="ingredentsSpa" v-model="ingredientsSpa" />
    </div>
    <div>
      <label for="tags">Preferences:</label>
      <div>
        <label for="tags">Glutten-free</label>
        <input type="checkbox" name="Glutten" />
        <label for="tags">Proximity</label>
        <input type="checkbox" name="Proximity" />
        <label for="tags">Vegan</label>
        <input type="checkbox" name="Vegan" />
      </div>
    </div>
    <label for="price">Price</label>
    <input type="text" v-model="price" />
    <div>
      <label for="confirm">Confirm</label>
      <input
        type="checkbox"
        name="confirm"
        v-model="confirm"
        @change="consolameEsta"
      />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    name: "",
    category: "",
    image: "",
    descriptionCat: "",
    descriptionSpa: "",
    ingredientsCat: "",
    ingredientsSpa: "",
    tags: [],
    price: "",
    confirm: false,
  }),
  methods: {
    ...mapActions(["setDataToSend"]),
    createDishesObjectToSend() {
      const data = {
        name: this.name,
        category: this.category,
        image: this.image,
        descriptionCat: this.descriptionCat,
        descriptionSpa: this.descriptionSpa,
        ingredientsCat: this.ingredientsCat.split(","),
        ingredientsSpa: this.ingredientsSpa.split(", "),
        tags: this.tags,
        price: parseFloat(this.price),
      };
      return data;
    },

    consolameEsta() {
      if (this.confirm) {
        this.setDataToSend(this.createDishesObjectToSend());
      } else {
        this.setDataToSend({});
      }
    },
  },
};
</script>
