const Category = require('./Category');

module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define('subcategory', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    category_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Category,
        key: 'uuid',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: 'subcategory',
    freezeTableName: true,
    timestamps: false,
  }, sequelize);

  // class Subcategory extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate() {
  //     // define association here
  //     // Subcategory.belongsTo(Category, { foreignKey: 'category_uuid' });

  //   }
  // }
  // Subcategory.init({
  //   uuid: {
  //     type: DataTypes.UUID,
  //     primaryKey: true,
  //     allowNull: false,
  //   },
  //   category_uuid: {
  //     type: DataTypes.UUID,
  //     allowNull: false,
  //     references: {
  //       model: Category,
  //       key: 'uuid',
  //     },
  //   },
  //   name: {
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
  //   modelName: 'subcategory',
  //   freezeTableName: true,
  //   timestamps: false,
  // });
  // Subcategory.associate = (models) => {
  //   Subcategory.belongsTo(models.Category, { foreignKey: 'category_uuid' });
  // };
  // Category.hasMany(Subcategory);
  // Subcategory.belongsTo(Category, { foreignKey: 'category_uuid' });
  return Subcategory;
};
