const { model, Schema } = require('mongoose');

const wineSchema = Schema({
  name: String,
  winery: String,
  type: String,
  year: Number,
  image: { type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMq_Jd70_m8O1tkYLlJtB31ugMmGNVEI0zw&usqp=CAU' },
  DO: String,
  grapeTypes: [
    String
  ],
  bottlePrice: Number,
  glassPrice: { type: Number, default: 0 }
});

module.exports = model('Wine', wineSchema);
