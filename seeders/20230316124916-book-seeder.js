
module.exports = {
   up:(queryInterface, Sequelize)=> {
   return queryInterface.bulkInsert('Books',[
    {
    title: 'HR for small business',
    author: 'cooper L.',
    genre: 'Business',
    ownerId: 2,
    borrowerId: null,
    ISBN: '978-0061122412',
   },
   {
    title: 'Dragonball kai',
    author: 'cooper L.',
    genre: 'Fiction',
    ownerId: 2,
    borrowerId: null,
    ISBN: '978-0061122413',
   },
  ])
  },

   down:(queryInterface, Sequelize)=>{
    return queryInterface.bulkDelete('Books',{},null)
  }
  
};
