const { Sequelize,Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/Library');
const Owner = require('./models/Owner');

(async () => {
  try {
    await sequelize.sync();
    const newOwner = await Owner.create({
      name: 'Jane Doe',
    });
    console.log('New borrower created:', newOwner.toJSON());
  } catch (error) {
    console.error('Error creating borrower:', error);
  }
})();
