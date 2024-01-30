const { User } = require('../models');
const { generateToken } = require('./auth.service');

const validateLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || password !== user.password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const token = generateToken({ id: user.id });

  return { status: 'OK', data: { token } };
};

module.exports = { validateLogin };