module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING(255),
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });

  Category.associate = (models) => {
    Category.hasOne(models.PostCategory,
      { foreignKey: 'postCategoryId', as: "posts_categories" });
    Category.belongsToMany(models.BlogPost, 
      { through: 'PostCategory', as: 'blog_posts', foreignKey: 'categoryId' }); 
    };
  return Category;
};