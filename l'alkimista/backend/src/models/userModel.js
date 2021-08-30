const {model, Schema} = require('mongoose');

const userSchema = Schema({
    name: String,
    login: String,
    password: String,
    role: String
})

module.exports = model('User', userSchema)