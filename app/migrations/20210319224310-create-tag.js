module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tag', {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('tag');
  },
};
