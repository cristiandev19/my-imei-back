const { Schema, model } = require('mongoose');

const ImeiSchema = Schema({
  _id_user: {
    type: String,
    require: true
  },
  imei: {
    type: String,
    require: true,
    unique: true
  },
  alias: {
    type: String,
    require: true
  },
  estado: {
    type: String,
    require: true
  }
});

const Imei = model('Imei', ImeiSchema);

module.exports = {
  Imei
}