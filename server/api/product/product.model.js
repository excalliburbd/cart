'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  info: String,
  available: Boolean,
  ammount: Number,
  price: Number
});

module.exports = mongoose.model('Product', ProductSchema);