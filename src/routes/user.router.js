const { Router } = require('express');
const { userController } = require('../controllers');
const validateRequiredFieldsUser = require('../middlewares/validateRequiredFieldsUser');
const validateToken = require('../middlewares/validateToken');

const userRouter = Router();

userRouter
  .post('/', validateRequiredFieldsUser, userController.create)
  .get('/', validateToken, userController.findAll)
  .get('/:id', validateToken, userController.findById);

module.exports = userRouter;