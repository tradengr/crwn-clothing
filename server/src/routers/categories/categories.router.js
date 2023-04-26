const categoriesRouter = require('express').Router();
const { httpGetCategories } = require('./categories.controller');

categoriesRouter.get('/', httpGetCategories);

module.exports = categoriesRouter;