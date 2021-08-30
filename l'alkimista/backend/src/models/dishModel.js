const { model, Schema } = require('mongoose');

const dishSchema = Schema({
  nameCat: String,
  nameSpa: String,
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
