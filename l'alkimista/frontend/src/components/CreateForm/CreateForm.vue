<template>
  <div>
    <create-dishes
      :category="category"
      class="form__create"
      v-if="category === 'Dishes'"
    ></create-dishes>
    <create-menu
      :category="category"
      class="form__create"
      v-if="category === 'Menus'"
    ></create-menu>
    <create-wine
      :category="category"
      class="form__create"
      v-if="category === 'Wines'"
    ></create-wine>
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
<style scoped>
</style>
