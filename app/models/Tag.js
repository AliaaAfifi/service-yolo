const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Tag.init({
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
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
    modelName: 'tag',
    freezeTableName: true,
    timestamps: false,
  });
  return Tag;
};
