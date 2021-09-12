<template>
  <main>
    <h2>Els nostres plats</h2>
    <div class="filters">
      <h3>Filtres:</h3>
      <div class="icon glutenFree">
        <img src="../assets/gluten-free.svg" />
        <input
          type="checkbox"
          name="Gluten-free"
          value="gluten-free"
          v-model="newTags"
          @change="addTag(glutenFree)"
        />
      </div>

      <i class="fas fa-map-marker-alt icon proximity"
        ><input
          type="checkbox"
          name="Proximity"
          value="proximity"
          v-model="newTags"
          @change="addTag()"
      /></i>
      <i class="fas fa-seedling icon vegan"
        ><input
          type="checkbox"
          name="Vegan"
          value="vegan"
          v-model="newTags"
          @change="addTag()"
      /></i>
    </div>

    <ul>
      <li v-for="dish in filterDishes" :key="dish">
        <router-link :to="'/dishes/' + dish._id"
          ><span>{{ dish.name }}</span></router-link
        >
      </li>
    </ul>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default defineComponent({
  data: () => ({
    newTags: [],
    filtered: [],
  }),
  computed: {
    ...mapState(["dishes", "tags"]),
    ...mapGetters(["filterDishes"]),
  },
  methods: {
    ...mapActions(["fetchDishesFromApi", "getDishesFilter"]),
    addTag() {
      this.getDishesFilter(this.newTags);
    },
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
.filters {
  display: flex;
  width: fit-content;
  margin: 2rem auto;
  gap: 1rem;
}
.icon {
  font-size: 2.5rem;
  margin-left: 3rem;
  color: #212121;
  height: 3rem;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.vegan {
  position: relative;
}
.vegan:hover::after {
  content: "vegan";
  color: #37be43;
  font-size: 1rem;
  bottom: -1rem;
  position: absolute;
}
.glutenFree {
  position: relative;
}

.glutenFree:hover::after {
  content: "gluten-free";
  width: fit-content;
  color: #3798be;
  font-size: 1rem;
  bottom: -2.5rem;
  position: absolute;
}
.proximity {
  position: relative;
}
.proximity:hover::after {
  content: "proximity";
  color: #df3939;
  font-size: 1rem;
  bottom: -1rem;
  position: absolute;
}
</style>
