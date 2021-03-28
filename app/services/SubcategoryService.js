const { v4: uuidv4 } = require('uuid');
const { subcategory, sequelize } = require('../models');

// Create Subcategory
exports.createSubcategory = (request, categoryUUID, userUUID) => {
  const {
    name, description,
  } = request;
  const uuid = uuidv4();
  return subcategory.create({
    uuid,
    category_uuid: categoryUUID,
    name,
    description,
    created_at: sequelize.literal('CURRENT_TIMESTAMP'),
    created_by: userUUID,
  // eslint-disable-next-line no-console
  }).then((data) => data).catch((err) => console.log(err));
};
