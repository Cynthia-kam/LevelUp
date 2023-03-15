const { Sequelize,Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/Library');
const Borrower = require('./models/Borrower');

(async () => {
  try {
    await sequelize.sync();
    const newBorrower = await Borrower.create({
      name: 'Demi',
    });
    console.log('New borrower created:', newBorrower.toJSON());
  } catch (error) {
    console.error('Error creating borrower:', error);
  }
})();
