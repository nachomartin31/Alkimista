const { model, Schema } = require('mongoose');

const dishSchema = Schema({
  name: String,
  image: String,
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
