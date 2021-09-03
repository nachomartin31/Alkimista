<template>
  <div>
    <h2>Els nostres menús</h2>
    <ul>
      <li v-for="menu in menus" :key="menu">{{ menu }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState(["menus"]),
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
