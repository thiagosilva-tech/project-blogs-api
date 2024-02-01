const { User } = require('../models');
const { generateToken } = require('./auth.service');

const validateLogin = async (email, password) => {
  const { dataValues } = await User.findOne({ where: { email } });
  if (!dataValues || password !== dataValues.password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const token = generateToken({ id: dataValues.id });

  return { status: 'OK', data: { token } };
};

module.exports = { validateLogin };