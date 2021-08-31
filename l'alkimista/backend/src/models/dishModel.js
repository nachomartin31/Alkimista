const { model, Schema } = require('mongoose');

const dishSchema = Schema({
  name: String,
  image: { type: String, default: 'https://img.icons8.com/dotty/2x/meal.png' },
  descriptionCat: String,
  descriptionSpa: String,
  ingredientsCat: [
    String
  ],
  ingredientsSpa: [
    String
  ],
  tags: [
    String
  ],
  price: Number
});

module.exports = model('Dish', dishSchema);
