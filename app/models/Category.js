module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    updated_by: {
      type: DataTypes.UUID,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'category',
    freezeTableName: true,
    timestamps: false,
  }, sequelize);

  // class Category extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate() {
  //     // define association here
  //     // Category.hasMany(Subcategory);
  //   }
  // }
  // Category.init({
  //   uuid: {
  //     type: DataTypes.UUID,
  //     primaryKey: true,
  //     allowNull: false,
  //   },
  //   name: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     unique: true,
  //   },
  //   description: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  //   updated_at: {
  //     type: DataTypes.DATE,
  //   },
  //   updated_by: {
  //     type: DataTypes.UUID,
  //   },
  //   created_at: {
  //     type: DataTypes.DATE,
  //     allowNull: false,
  //     defaultValue: DataTypes.NOW,
  //   },
  //   created_by: {
  //     type: DataTypes.UUID,
  //     allowNull: false,
  //   },
  // }, {
  //   sequelize,
  //   modelName: 'category',
  //   freezeTableName: true,
  //   timestamps: false,
  // });
  return Category;
};
