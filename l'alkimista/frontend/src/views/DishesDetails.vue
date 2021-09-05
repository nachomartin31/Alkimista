<template>
  <h2>{{ currentDish.name }}</h2>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  computed: {
    ...mapState(["currentDish"]),
  },
  methods: {
    ...mapActions(["fetchOneDish"]),
  },

  mounted() {
    const route = useRoute();
    const { dishId } = route.params;
    this.fetchOneDish(dishId);
  },
});
</script>
