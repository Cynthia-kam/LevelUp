
// Import dependencies
require = require("esm")(module/*, options*/)

const { QueryTypes } = require('sequelize');

// Define seed data
const owners = [
  {
  name:'Kelly C'
  },
  {
  name:'Lea B'
  },
];

// Define the seed function
exports.up = async function(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Owners', owners);
}

// Define the unseed function
exports.down = async function(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Owners', null, {});
}
