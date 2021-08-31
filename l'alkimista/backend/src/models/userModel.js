const { model, Schema } = require('mongoose');

const userSchema = Schema({
  name: String,
  login: String,
  password: String,
  role: { type: String, default: 'employee' }
});

module.exports = model('User', userSchema);
