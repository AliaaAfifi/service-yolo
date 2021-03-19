const {
  Model,
} = require('sequelize');
const Cart = require('./Cart');
const product = require('./Product');

module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  CartProduct.init({
    cart_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Cart,
        key: 'uuid',
      },
    },
    product_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: product,
        key: 'uuid',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'cart_product',
  });
  return CartProduct;
};
