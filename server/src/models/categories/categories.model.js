const Category = require('./categories.mongo');

async function getCategories() {
  const res = await Category.find({}, { _id: 0, __v: 0 });
  const categories = res.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categories;
}

module.exports = { getCategories };