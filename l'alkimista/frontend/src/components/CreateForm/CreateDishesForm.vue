<template>
  <div>
    <div>
      <label for="name">Name:</label>

      <input
        type="text"
        name="name"
        v-model="name"
        autocomplete="off"
        @input="unconfirm"
      />
    </div>
    <div>
      <label for="image">Image:</label>
      <input type="file" accept="image/*" name="image" autocomplete="off" />
    </div>
    <div>
      <label for="descriptionCat">Description in catalan:</label>
      <input
        type="text"
        name="descriptionCat"
        autocomplete="off"
        v-model="descriptionCat"
        @input="unconfirm"
      />
    </div>
    <div>
      <label for="descriptionSpa">Description in spanish:</label>
      <input
        type="text"
        name="descriptionSpa"
        autocomplete="off"
        v-model="descriptionSpa"
        @input="unconfirm"
      />
    </div>
    <div>
      <label for="ingredientsCat">Ingredients in catalan:</label>
      <input
        type="text"
        name="ingredentsCat"
        autocomplete="off"
        v-model="ingredientsCat"
        @input="unconfirm"
      />
    </div>
    <div>
      <label for="ingredientsSpa">Ingredients in spanish:</label>
      <input
        type="text"
        name="ingredentsSpa"
        autocomplete="off"
        v-model="ingredientsSpa"
        @input="unconfirm"
      />
    </div>
    <div>
      <label for="tags">Preferences:</label>
      <div>
        <label for="tags">Gluten-free</label>
        <input
          type="checkbox"
          name="Glutten"
          v-model="tags"
          value="gluten-free"
        />
        <label for="tags">Proximity</label>
        <input
          type="checkbox"
          name="Proximity"
          v-model="tags"
          value="proximity"
        />
        <label for="tags">Vegan</label>
        <input type="checkbox" name="Vegan" v-model="tags" value="vegan" />
      </div>
    </div>
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
import { mapActions } from "vuex";
import setDataAtStore from "../../utils/SetDataAtStore";
import unconfirm from "../../utils/Unconfirm";

export default {
  data: () => ({
    name: "",
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

    setDataAtStore,
    unconfirm,
    createObjectToSend() {
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
  },
  props: {
    category: String,
  },
};
</script>
