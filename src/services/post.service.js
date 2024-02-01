const { BlogPost, PostCategory, Category } = require('../models');

const create = async ({ title, content, categoryIds, userId }) => {
  const categoryDb = await Category.findAll();
  const categoryExists = categoryDb.every((category) => categoryIds.includes(category.id));
  if (!categoryExists) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }
  const { dataValues } = await BlogPost.create({ title, content, userId }); 

  await Promise.all(categoryIds.map(async (categoryId) => {
    await PostCategory.create({ categoryId, postId: dataValues.id });
  }));
  return { status: 'CREATED', data: dataValues };
}; 

module.exports = { create };
