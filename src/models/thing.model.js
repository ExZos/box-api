const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ThingSchema = new Schema({
  name: String,
  quantity: Number
});

const Thing = mongoose.model('things', ThingSchema);

module.exports = Thing;
