const { Category } = require('../models');

const create = async ({ name }) => {
  const { dataValues } = await Category.create({ name }); 
  return { status: 'CREATED', data: dataValues };
}; 

const findAll = async () => {
  const categories = await Category.findAll();
  return { status: 'OK', data: categories };
};

module.exports = {
  create,
  findAll,
};