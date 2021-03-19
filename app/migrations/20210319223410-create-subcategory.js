module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subcategory', {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      category_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'category',
          key: 'uuid',
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('subcategory');
  },
};
