<template>
  <div>
    <h2>Els nostres menús</h2>
    <section v-for="menu in menus" :key="menu">
      <h3>{{ menu.name }}</h3>
      <ul>
        <li v-for="dish in menu.dishes" :key="dish">
          <a href="#">{{ dish.name }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState(["menus"]),
  },
  methods: {
    ...mapActions(["fetchMenusFromApi"]),
  },
  mounted() {
    this.fetchMenusFromApi();
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
