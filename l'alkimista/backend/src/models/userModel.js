const { model, Schema } = require('mongoose');

const userSchema = Schema({
  email: String,
  name: String,
  login: String,
  password: String,
  role: { type: String, default: 'employee' }
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
