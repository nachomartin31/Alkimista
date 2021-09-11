<template>
  <div>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" @input="unconfirm" />
    </div>
    <div>
      <label for="winery">Winery</label>
      <input v-model="winery" type="text" name="winery" @input="unconfirm" />
    </div>
    <div>
      <label for="type">Type</label>
      <input v-model="type" type="text" name="type" @input="unconfirm" />
    </div>
    <div>
      <label for="year">Year</label>
      <input v-model="year" type="text" name="year" @input="unconfirm" />
    </div>
    <div>
      <label for="image">Image</label>
      <input type="file" name="image" @input="unconfirm" />
    </div>
    <div>
      <label for="DO">DO</label>
      <input v-model="DO" type="text" name="DO" @input="unconfirm" />
    </div>
    <div>
      <label for="grapeTypes">Grapes</label>
      <input
        v-model="grapes"
        type="text"
        name="grapeTypes"
        @input="unconfirm"
      />
    </div>
    <div>
      <label for="bottlePrice">Price for bottle</label>
      <input
        v-model="bottlePrice"
        type="text"
        name="bottlePrice"
        @input="unconfirm"
      />
    </div>
    <div>
      <label for="glassPrice">Price for glass</label>
      <input
        v-model="glassPrice"
        type="text"
        name="glassPrice"
        @input="unconfirm"
      />
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
import setDataAtStore from "../../utils/SetDataAtStore";
import unconfirm from "../../utils/Unconfirm";

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
    setDataAtStore,
    unconfirm,
    createObjectToSend() {
      const data = {
        name: this.name,
        winery: this.winery,
        type: this.type,
        year: this.year,
        grapeTypes: this.grapes.split(","),
        DO: this.DO,
        bottlePrice: parseFloat(this.bottlePrice),
        glassPrice: parseFloat(this.glassPrice),
      };
      return data;
    },
  },
};
</script>
