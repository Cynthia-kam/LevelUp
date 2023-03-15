
const {Book}=require('./models/Book')
//getbooks
const getBooks = async () => {
  try {
    const books = await Book.find();
    return books;
  } catch (error) {
    console.error(error);
  }
};
//create a book
// const createBook = (body) => {

//   return new Promise(function(resolve, reject) {
//     if (!body) {
//       reject(new Error('Invalid argument: body is undefined'))
//     }
//     return new Promise(function(resolve, reject) {
//       const { title, author, ISBN, genre, owner, borrower } = body;
//       pool.query('INSERT INTO books (title, author, "ISBN", genre, owner, borrower) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [title, author, ISBN, genre, owner, borrower], (error, results) => {
//         if (error) {
//           reject(error);
//         } else if (!results || !results.rows || results.rows.length === 0) {
//           reject(new Error('Failed to insert book record'));
//         } else {
//           resolve(results.rows[0]);
//         }
//       });
//     });
//   })
// }
  module.exports={getBooks}