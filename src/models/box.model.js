const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BoxSchema = new Schema({
  stuff: Object
});

const Box = mongoose.model('boxes', BoxSchema);

module.exports = Box;
