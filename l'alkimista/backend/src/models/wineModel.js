const {model, Schema} = require('mongoose');

const wineSchema = Schema({
    name: String,
    DO: String,
    grapeTypes: [
        String
    ],
    price: Number
})

module.exports = model('Wine', wineSchema)
