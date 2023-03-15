
const { Sequelize,Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/Library');
const Book = require('./models/Book');

(async () => {
  try {
    await sequelize.sync();
    const newBook = await Book.create({
        title: 'what am i here for',
        author: 'Rick warren',
        genre: 'Religion',
        ownerId: 1,
        borrowerId: null,
        ISBN: '978-0061122410',
    });
    console.log('New book created:', newBook.toJSON());
  } catch (error) {
    console.error('Error creating book:', error);
   
  }
})();