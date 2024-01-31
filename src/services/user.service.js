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

const findAll = async () => {
  const dataValues = await User
    .findAll({ attributes: ['id', 'displayName', 'email', 'image'] });

  const users = dataValues.map((user) => user.dataValues);
  console.log(users);
  return { status: 'OK', data: users }; 
};

const findById = async (id) => {
  const user = await User.findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });
  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }
  return { status: 'OK', data: user };
};

module.exports = { 
  create, 
  findAll,
  findById,
};