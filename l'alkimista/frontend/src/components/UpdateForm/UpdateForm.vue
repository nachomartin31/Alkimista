<template>
  <div>
    <update-dishes
      :action="action"
      class="update__form"
      v-if="category === 'Dishes'"
    ></update-dishes>
    <update-menu
      :action="action"
      class="update__form"
      v-if="category === 'Menus'"
    ></update-menu>
    <update-wine
      :action="action"
      class="update__form"
      v-if="category === 'Wines'"
    ></update-wine>
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
