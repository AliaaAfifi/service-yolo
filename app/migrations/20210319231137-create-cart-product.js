module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart_product', {
      cart_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'cart',
          key: 'user_uuid',
        },
      },
      product_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'product',
          key: 'uuid',
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('cart_product');
  },
};
