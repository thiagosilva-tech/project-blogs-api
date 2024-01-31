const { Router } = require('express');
const { categoryController } = require('../controllers');
const validateRequiredFieldsCategory = require('../middlewares/validateRequiredFieldsCategory');
const { validateToken } = require('../middlewares/validateToken');

const categoriesRouter = Router();

categoriesRouter
  .post('/', validateRequiredFieldsCategory, validateToken, categoryController.create);

module.exports = categoriesRouter;