

// Import dependencies
require = require("esm")(module/*, options*/)

const { QueryTypes } = require('sequelize');

// Define seed data
const books = [
  {
    title: 'HR for small business',
    author: 'cooper L.',
    genre: 'Business',
    ownerId: 2,
    borrowerId: null,
    ISBN: '978-0061122412',
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    title: 'Dragonball kai',
    author: 'cooper L.',
    genre: 'Fiction',
    ownerId: 2,
    borrowerId: null,
    ISBN: '978-0061122413',
    createdAt:new Date(),
    updatedAt:new Date()
  },
];

// Define the seed function
exports.up = async function(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Books', books);
}

// Define the unseed function
exports.down = async function(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Books', null, {});
}