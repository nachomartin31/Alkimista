<template>
  <div class="form__create">
    <div>
      <label for="name">Name:</label>
      <input type="text" name="name" />
    </div>
    <create-dishes
      class="form__create"
      v-if="category === 'Dishes'"
    ></create-dishes>
    <create-menu class="form__create" v-if="category === 'Menus'"></create-menu>
    <create-wine class="form__create" v-if="category === 'Wines'"></create-wine>
  </div>
</template>
<script>
import CreateDishes from "./CreateDishesForm.vue";
import CreateMenu from "./CreateMenuForm.vue";
import CreateWine from "./CreateWineForm.vue";

export default {
  components: {
    CreateDishes,
    CreateMenu,
    CreateWine,
  },
  props: {
    action: String,
    category: String,
  },
};
</script>
<style>
.form__create {
  gap: 0.7rem;
}
</style>
