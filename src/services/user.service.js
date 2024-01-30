const { User } = require('../models');
const { generateToken } = require('./auth.service');

const create = async ({ displayName, email, password, image }) => {
  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const newUser = await User.create({ displayName, email, password, image });

  const token = generateToken({ id: newUser.id });
  return { status: 'CREATED', data: { token } };
}; 

module.exports = { create };