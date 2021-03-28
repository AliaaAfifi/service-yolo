const {
  Model,
} = require('sequelize');
const user = require('./User');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    user_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: user,
        key: 'uuid',
      },
    },
    total_price: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
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
    modelName: 'cart',
    freezeTableName: true,
    timestamps: false,
  });
  return Cart;
};
