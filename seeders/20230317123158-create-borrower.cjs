
// Import dependencies
require = require("esm")(module/*, options*/)

const { QueryTypes } = require('sequelize');

// Define seed data
const borrowers = [
  {
  name:'Cynthia K'
  },
  {
  name:'Abizera J.'
  },
];

// Define the seed function
exports.up = async function(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Borrowers', borrowers);
}

// Define the unseed function
exports.down = async function(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Borrowers', null, {});
}
