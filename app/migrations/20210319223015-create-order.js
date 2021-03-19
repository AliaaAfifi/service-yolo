module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('order', {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
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
      status: {
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable('order');
  },
};
