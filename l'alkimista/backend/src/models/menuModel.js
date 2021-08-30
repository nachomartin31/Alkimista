const { ObjectId } = require('bson');
const {model, Schema} = require('mongoose');

const menuSchema = Schema({
    name: String,
    dishes: {type: ObjectId, ref: 'Dish'},
    price: Number
})

module.exports = model('Menu', menuSchema)
