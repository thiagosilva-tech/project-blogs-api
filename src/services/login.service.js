const { User } = require('../models');
const { generateToken } = require('./auth.service');

const validateLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const { dataValues } = user;
   
  if (!dataValues || password !== dataValues.password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }
  const token = generateToken({ id: dataValues.id });
  return { status: 'OK', data: { token } };
};

module.exports = { validateLogin };