const {model, Schema} = require('mongoose');

const bookingSchema = Schema({
    name: String,
    day: Date,
    service: String,
    pass: Number,
    numberOfCostumers: Number,
    madeOnDate:{type: Date, default: new Date()}
})

module.exports = model('Book', bookingSchema)