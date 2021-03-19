module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_tag', {
      product_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'product',
          key: 'uuid',
        },
      },
      tag_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'tag',
          key: 'uuid',
        },
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      upated_by: {
        type: Sequelize.UUID,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      created_by: {
        type: Sequelize.UUID,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('product_tag');
  },
};
