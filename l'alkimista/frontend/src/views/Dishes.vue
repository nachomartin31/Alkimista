<template>
  <div>
    <h2>Els nostres plats</h2>
    <ul>
      <li v-for="dish in dishes" :key="dish">{{ dish }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState(["dishes"]),
  },
});
</script>

<style>
li {
  list-style: none;
  margin: 15px auto;
}
a {
  color: #212121;
}
</style>
