module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      subcategory_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'subcategory',
          key: 'uuid',
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      available_in_stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('product');
  },
};
