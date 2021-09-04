<template>
  <div>
    <h2>Els nostres vins</h2>
    <ul>
      <li v-for="wine in wines" :key="wine">
        <a href="#">{{ wine.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState(["wines"]),
  },
  methods: {
    ...mapActions(["fetchWinesFromApi"]),
  },
  mounted() {
    this.fetchWinesFromApi();
  },
});
</script>
