const {
  Model,
} = require('sequelize');
const user = require('./User');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Order.init({
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
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
    status: {
      type: DataTypes.STRING(50),
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
    modelName: 'order',
  });
  return Order;
};
