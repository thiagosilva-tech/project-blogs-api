const { Category } = require('../models');

const create = async ({ name }) => {
  const { dataValues } = await Category.create({ name }); 
  return { status: 'CREATED', data: dataValues };
}; 

module.exports = {
  create,
};