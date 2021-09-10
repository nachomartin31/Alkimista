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
.form__create {
  gap: 0.7rem;
  padding: 1rem;
  border: 5px double #bf0101;
  border-radius: 1rem;
}
</style>
