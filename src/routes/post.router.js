const { Router } = require('express');
const { postController } = require('../controllers');
const validateRequiredFieldsPost = require('../middlewares/validateRequiredFieldsPost');
const validateToken = require('../middlewares/validateToken');

const postRouter = Router();

postRouter
  .post('/', validateRequiredFieldsPost, validateToken, postController.create)
  .get('/', validateToken, postController.findAll)
  .get('/:id', validateToken, postController.findOne);

module.exports = postRouter;