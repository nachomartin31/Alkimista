<template>
  <div>
    <h2>Els nostres plats</h2>
    <ul>
      <li v-for="dish in dishes" :key="dish">
        <a href="#">{{ dish.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  computed: {
    ...mapState(["dishes"]),
  },
  methods: {
    ...mapActions(["fetchDishesFromApi"]),
  },

  mounted() {
    this.fetchDishesFromApi();
  },
});
</script>

<style>
li {
  list-style: none;
  margin: 15px auto;
  color: #212121;
}
</style>
