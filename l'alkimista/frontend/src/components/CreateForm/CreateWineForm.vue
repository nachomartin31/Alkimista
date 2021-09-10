<template>
  <div>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" />
    </div>
    <div>
      <label for="winery">Winery</label>
      <input v-model="winery" type="text" name="winery" />
    </div>
    <div>
      <label for="type">Type</label>
      <input v-model="type" type="text" name="type" />
    </div>
    <div>
      <label for="year">Year</label>
      <input v-model="year" type="text" name="year" />
    </div>
    <div>
      <label for="image">Image</label>
      <input type="file" name="image" />
    </div>
    <div>
      <label for="DO">DO</label>
      <input v-model="DO" type="text" name="DO" />
    </div>
    <div>
      <label for="grapeTypes">Grapes</label>
      <input v-model="grapes" type="text" name="grapeTypes" />
    </div>
    <div>
      <label for="bottlePrice">Price for bottle</label>
      <input v-model="bottlePrice" type="text" name="bottlePrice" />
    </div>
    <div>
      <label for="glassPrice">Price for glass</label>
      <input v-model="glassPrice" type="text" name="glassPrice" />
    </div>
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
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    name: "",
    image: null,
    winery: "",
    type: "",
    year: "",
    grapes: "",
    DO: "",
    bottlePrice: 0,
    glassPrice: 0,
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
        winery: this.winery,
        image: this.image,
        type: this.type,
        year: this.year,
        grapes: this.grapes.split(","),
        DO: this.DO,
        bottlePrice: parseFloat(this.bottlePrice),
        glassPrice: parseFloat(this.glassPrice),
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
