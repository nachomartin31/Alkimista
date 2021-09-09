<template>
  <div class="update-menu">
    <div>
      <label for="name">Name:</label>
      <input type="text" name="name" />
    </div>
    <h5 for="dishes">Dishes:</h5>
    <label for="dish" v-for="element in dishes" :key="element">
      <input type="checkbox" name="dish" value="element" />{{ element.name }}
    </label>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["dishes"]),
  },
};
</script>
<style scooped>
.update-menu {
  display: flex;
  flex-direction: column;
}
</style>
