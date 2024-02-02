const { User, Category } = require('../models');

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

module.exports = attributesAndInclude;