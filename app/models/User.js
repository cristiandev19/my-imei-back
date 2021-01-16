const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  names: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
});

const User = model('User', UserSchema);

module.exports = {
  User
}