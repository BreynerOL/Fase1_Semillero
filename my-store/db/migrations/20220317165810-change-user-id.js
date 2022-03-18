'use strict';
const {  DataTypes } = require('sequelize');


const { CUSTOMER_TABLE} = require('./../models/customerModel')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'id',{
      field: 'id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    });

  },

  down: async () => {
    //await queryInterface.dropTable(CUSTOMER_TABLE)
  }
};
