const {
  Model,
} = require('sequelize');
const product = require('./Product');
const tag = require('./Tag');

module.exports = (sequelize, DataTypes) => {
  class ProductTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  ProductTag.init({
    product_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: product,
        key: 'uuid',
      },
    },
    tag_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: tag,
        key: 'uuid',
      },
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    upated_by: {
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
    modelName: 'product_tag',
    freezeTableName: true,
    timestamps: false,
  });
  return ProductTag;
};
