<template>
  <main>
    <h3>{{ currentWine.name }}</h3>

    <div class="wine__data">
      <img :src="currentWine.image" :alt="currentWine.name" class="wineImage" />
      <div class="wine__info">
        <h3>Classe</h3>
        <p>{{ currentWine.type }}</p>
        <h3>Celler</h3>
        <p>{{ currentWine.cellar }}</p>
        <h3>Any</h3>
        <p>{{ currentWine.year }}</p>
        <h3>Raïm</h3>
        <ul>
          <li v-for="grape in currentWine.grapeTypes" :key="grape">
            {{ grape }}
          </li>
        </ul>

        <h4>{{ currentWine.bottlePrice }} €</h4>
        <h4 v-if="currentWine.glassPrice">
          copa: {{ currentWine.glassPrice }} €
        </h4>
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
    ...mapState(["currentWine"]),
  },
  methods: {
    ...mapActions(["fetchOneWine"]),
  },
  mounted() {
    const route = useRoute();
    const { wineId } = route.params;
    this.fetchOneWine(wineId);
  },
});
</script>

<style scoped>
h4 {
  color: #bf0101;
  font-weight: 300;
}
.wine__data {
  display: flex;
  margin: 5rem auto;
  align-items: center;
  width: 70%;
  gap: 15%;
  justify-content: center;
}
.wineImage {
  max-height: 20rem;
  max-width: 80%;
}
.wine__info {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 720px) {
  .wine__data {
    flex-direction: column;
  }
}
</style>
