const { BlogPost, PostCategory, Category, User } = require('../models');

const attributesAndInclude = {
  attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
  include: [
    {
      model: User,
      as: 'user',
      attributes: ['id', 'displayName', 'email', 'image'],
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
      attributes: ['id', 'name'],
    },
  ],
};

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

const findAll = async () => {
  const posts = await BlogPost.findAll(attributesAndInclude); 
  return { status: 'OK', data: posts };
};

const findOne = async (id) => {
  const post = await BlogPost.findByPk(id, attributesAndInclude);
  if (!post) {
    return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  }
  return { status: 'OK', data: post };
};

const update = async (id, { title, content }, userId) => {
  const post = await BlogPost.findByPk(id);
  if (!post) {
    return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  }
  if (post.userId !== userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }
  await post.update({ title, content }, attributesAndInclude);
  const updatedPost = await BlogPost.findByPk(id, attributesAndInclude);
  return { status: 'OK', data: updatedPost };
};

module.exports = { create, findAll, findOne, update };
