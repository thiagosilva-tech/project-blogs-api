const { Router } = require('express');
const { userController } = require('../controllers');
const validateRequiredFieldsUser = require('../middlewares/validateRequiredFieldsUser');

const userRouter = Router();

userRouter
  .post('/', validateRequiredFieldsUser, userController.create);

module.exports = userRouter;