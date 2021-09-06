<template>
  <main>
    <h2>Els nostres vins</h2>
    <ul>
      <li v-for="wine in wines" :key="wine">
        <router-link :to="'/wines/' + wine._id"
          ><span>{{ wine.name }}</span></router-link
        >
      </li>
    </ul>
  </main>
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
