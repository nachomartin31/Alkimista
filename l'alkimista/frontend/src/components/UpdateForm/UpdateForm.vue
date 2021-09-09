<template>
  <div class="update__form">
    <update-dishes
      class="update__form"
      v-if="category === 'Dishes'"
    ></update-dishes>
    <update-menu class="update__form" v-if="category === 'Menus'"></update-menu>
    <update-wine class="update__form" v-if="category === 'Wines'"></update-wine>
  </div>
</template>
<script>
import UpdateDishes from "./UpdateDishForm.vue";
import UpdateMenu from "./UpdateMenuForm.vue";
import UpdateWine from "./UpdateWineForm.vue";

export default {
  components: {
    UpdateDishes,
    UpdateMenu,
    UpdateWine,
  },
  props: {
    action: String,
    category: String,
  },
};
</script>
<style>
.update__form {
  gap: 0.5rem;
}
</style>
