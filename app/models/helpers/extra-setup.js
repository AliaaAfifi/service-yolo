const Category = require('../Category');
const Subcategory = require('../Subcategory');

function applyExtraSetup() {
  // const { Category, Subcategory } = sequelize.models;

  // Category.hasMany(Subcategory);
  Subcategory.belongsTo(Category, { foreignKey: 'category_uuid' });
}

module.exports = { applyExtraSetup };
