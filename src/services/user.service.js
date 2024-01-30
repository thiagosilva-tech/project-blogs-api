const { User } = require('../models');
const { generateToken } = require('./auth.service');

const create = async (userData) => {
  const userExists = await User.findOne({ where: { email: userData.email } });

  if (userExists) {
    return { status: 'CONFLICT', message: 'User already exists' };
  }

  const newUser = await User.create(userData);
  
  if (!newUser) {
    return { status: 'SERVER_ERROR', message: 'Internal server error' }; 
  }

  const token = generateToken({ id: newUser.id });
  return { status: 'CREATED', message: token };
}; 

module.exports = { create };