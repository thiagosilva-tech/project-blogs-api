const { Router } = require('express');
const { loginController } = require('../controllers');
const validateRequiredFieldsLogin = require('../middlewares/validateRequiredFieldsLogin');

const loginRouter = Router();

loginRouter
  .post('/', validateRequiredFieldsLogin, loginController.validateLogin);

module.exports = loginRouter;