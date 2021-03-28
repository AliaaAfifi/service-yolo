module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart', {
      user_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'uuid',
        },
      },
      total_price: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      updated_by: {
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
    await queryInterface.dropTable('cart');
  },
};
