<template>
  <div class="form__update">
    <update-dishes
      class="form__update"
      v-if="category === 'Dishes'"
    ></update-dishes>
    <update-menu class="form__update" v-if="category === 'Menus'"></update-menu>
    <update-wine class="form__update" v-if="category === 'Wines'"></update-wine>
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
.update {
  gap: 0.7rem;
}
</style>
