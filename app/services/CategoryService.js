const { v4: uuidv4 } = require('uuid');
const Sequelize = require('sequelize');
const { category, sequelize } = require('../models');
// const Subcategory = require('../models/Subcategory');

// Category search
exports.listCategory = (request) => {
  const {
    name,
  } = request;
  return category.findAll({ where: { name: { [Sequelize.Op.like]: `%${name}%` } }, include: ['subcategories'] });
};
// Create Category
exports.createCategory = (request, userUUID) => {
  const {
    name, description,
  } = request;
  const uuid = uuidv4();
  return category.create({
    uuid,
    name,
    description,
    created_at: sequelize.literal('CURRENT_TIMESTAMP'),
    created_by: userUUID,
  // eslint-disable-next-line no-console
  }).then((data) => data).catch((err) => console.log(err));
};
