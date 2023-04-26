const { Schema, model } = require('mongoose');

const itemsSchema = new Schema({
  id: Number,
  imageUrl: String,
  name: String,
  price: Number,
});

const categoriesSchema = new Schema({
  title: String,
  items: [itemsSchema],
});

module.exports = model('Category', categoriesSchema);