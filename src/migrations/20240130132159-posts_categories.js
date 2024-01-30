'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable('posts_categories', {
     postId: {
       type: Sequelize.INTEGER,
       field: 'post_id',
       references: {
         model: 'blog_posts',
         key: 'id'
       },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id'
        },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
      },
   });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('posts_categories');
  }
};
