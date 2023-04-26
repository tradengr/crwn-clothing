const { getCategories } = require('../../models/categories/categories.model');

async function httpGetCategories(req, res) {
  const categories = await getCategories();
  return res.status(200).json(categories);
}

module.exports = { httpGetCategories };