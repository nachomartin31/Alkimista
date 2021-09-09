<template>
  <div class="form__create">
    <div>
      <label for="name">Name:</label>
      <input type="text" name="name" />
    </div>
    <div v-if="category === 'Dishes'">
      <div>
        <label for="category">Category:</label>
        <input type="text" name="category" />
      </div>
      <div>
        <label for="image">Image:</label>
        <input type="file" name="image" />
      </div>
      <div>
        <label for="descriptionCat">Description in catalan:</label>
        <input type="text" name="descriptionCat" />
      </div>
      <div>
        <label for="descriptionSpa">Description in spanish:</label>
        <input type="text" name="descriptionSpa" />
      </div>
      <div>
        <label for="ingredientsCat">Ingredients in catalan:</label>
        <input type="text" name="ingredentsCat" />
      </div>
      <div>
        <label for="ingredientsSpa">Ingredients in spanish:</label>
        <input type="text" name="ingredentsSpa" />
      </div>
      <div>
        <label for="tags">Preferences:</label>
        <div>
          <label for="tags">Glutten-free</label>
          <input type="checkbox" />
          <label for="tags">Proximity</label>
          <input type="checkbox" />
          <label for="tags">Vegan</label>
          <input type="checkbox" />
        </div>
      </div>
      <label for="price">Price</label>
      <input type="text" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    action: String,
    category: String,
  },
};
</script>
