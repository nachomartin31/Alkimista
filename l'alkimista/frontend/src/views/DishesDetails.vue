<template>
  <main>
    <h2>{{ currentDish.name }}</h2>

    <div class="dish__data">
      <img :src="currentDish.image" :alt="currentDish.name" class="dishImage" />
      <div class="dish__info">
        <h3>Descripció</h3>
        <p>{{ currentDish.descriptionCat }}</p>
        <h3>Ingredients</h3>
        <ul>
          <li
            v-for="ingredient in currentDish.ingredientsCat"
            :key="ingredient"
          >
            {{ ingredient }}
          </li>
        </ul>

        <h4>{{ currentDish.price }} € p.p.u.</h4>
      </div>
    </div>
  </main>
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

<style scoped>
h4 {
  color: #bf0101;
  font-weight: 300;
}
.dish__data {
  padding-bottom: 5rem;
  display: flex;
  margin: 5rem auto 0;
  align-items: center;
  width: 70%;
  gap: 15%;
  justify-content: center;
}
.dishImage {
  max-height: 20rem;
  max-width: 80%;
}
.dish__info {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 720px) {
  .dish__data {
    flex-direction: column;
  }
}
</style>
