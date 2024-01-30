module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
      tableName: "posts_categories",
      underscored: true,
    }
  );
  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: "postId",
      otherKey: "categoryId",
      as: "category",
    });
    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: "categoryId",
      otherKey: 'postId',
      as: "blog_post",
    });
  };
  return PostCategory;
};
