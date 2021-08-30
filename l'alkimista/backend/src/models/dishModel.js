const { model, Schema } = require('mongoose');

const dishSchema = Schema({
  name: String,
  descriptionCat: String,
  descriptionSpa: String,
  ingredientsCat: [
    String
  ],
  image: String,
  ingredientsSpa: [
    String
  ],
  tags: [
    String
  ],
  price: Number
});

module.exports = model('Dish', dishSchema);
