const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BoxSchema = new Schema({
  name: String,
  type: String,
  stuff: Object
});

const Box = mongoose.model('boxes', BoxSchema);

module.exports = Box;
