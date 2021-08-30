const { model, Schema } = require('mongoose');

const menuSchema = Schema({
  name: String,
  dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  price: Number
});

module.exports = model('Menu', menuSchema);
