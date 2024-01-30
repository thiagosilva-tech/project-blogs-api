module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });
  PostCategory.associate = (models) => {
    PostCategory.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
    PostCategory.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
  };
  return PostCategory;
};