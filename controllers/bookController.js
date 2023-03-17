import Book from "../models/Book.js";
import Owner from "../models/Owner.js";
import { Sequelize } from "sequelize";
import Borrower from "../models/Borrower.js";
class  bookController{
    // functions to get all books
    static async getBooks(req, res){
        
        try {
            const book= await Book.findAll()
            res.status(200).json({
                data:book
            })
        } catch (error) {
            
            res.status(500).json({
                message:"server error"
            })
            
        }
    }
    //get one book 

    static async getBook(req, res){
        const {id}= req.params;
        const book =await Book.findOne({ 
            where: { id: id },});
         
        if(!book){
            return res.status(404).json({
                message:`Book with id: ${id} was not found`
            });
        }else{   
            return res.status(200).json({                
           data:book
            });
        }
    }
    //get one book change the ownerId field with owner name
    static async getBookChangeOwnerName(req, res){
        const {id}= req.params;
        const book =await Book.findOne({ 
            where: { id: id },});
         
        if(!book){
            return res.status(404).json({
                message:`Book with id: ${id} was not found`
            });
        }else{
            // const owner=await Owner.findOne({where:{id:book.ownerId}})
            const ownerId=book.ownerId
            const bookowner =await Owner.findOne({ 
                where: { id: ownerId },attributes: ['name'],});
                
            return res.status(200).json({                
            title:book.title,
            author:book.author,
            genre:book.genre,
            ISBN:book.ISBN,
            owner:bookowner.dataValues.name
           
            });
        }
    }
    static async createBook(req, res){

        try {
            const {author,title,genre,owner,borrower,isbn}= req.body;
            const newBook= await Book.create({author,title,genre,ownerId:owner,borrowerId:borrower,ISBN:isbn});
            res.status(201).json({
                message:"New Book Created Succesfully",
                data:newBook
            })
        }
        catch (error) {
                 console.log(error)
                res.status(500).json({
                    message:"server error"
                });
            
        }
    
    
    }

    //get all books owned by  certain owner

    static async getAllBooksOwnedBy(req, res){
        const {id}= req.params;
        const book =await Book.findAll({ 
            where: { ownerId: id },});
         
        if(book==''){
            return res.status(404).json({
                message:`No book owned by user with id: ${id} found`
            });
        }else{
           
            const bookowner =await Owner.findOne({ 
                where: { id: id},attributes: ['name'],});
                console.log(bookowner.dataValues.name)
              const bookdata=  await book.map(book=>{
                return { title: book.title, author: book.author,owner: bookowner.dataValues.name};;
                })
            return res.status(200).json({     
            data:bookdata     
           
           
            });
        }
    }

    //borrow a ceratain book, change the borrower Id to null
    static async borrowBook(req, res) {
    
            const { id } = req.params;
            const { borrowerId} = req.body;
            const bookowner =await Book.findOne({ 
                where: { id: id},attributes: ['borrowerId'],});
        //check if they have not borrowed before
                const borrowedBook = await Book.findOne({
                    where: { borrowerId },
                  });
                
                  if (borrowedBook) {
                    return res.status(400).json({
                      message: "You have already borrowed a book, You can only  borrow one book at a time",
                    });
                  }
                
                //if they have not borrowed a book

                else{
                    if(bookowner.dataValues.borrowerId!=null)
                return res.status(200).json({
                          message: "Book is not available",
                        });
                       else{
                        try{
                            const borrowed= await Book.update(
                            { borrowerId: borrowerId },
                            { where: { id: id } }, 
                            { new: true });
                          
                            if (!borrowed) {
                              return res.status(404).json({
                                message: 'No book with such id '
                              });
                            }
                            
                            return res.status(200).json({
                              message: "Book is borrowed sucessfully",
                            
                            });
                          } 
                          catch (error) {
                            console.error(error);
                            return res.status(500).json({
                              message: "Server error",
                              error: error.message
                            });
                           
                }
                       }
                }
               

}
// returning a book
static async returnBook(req, res) {
    
    const { id } = req.params;
    const { borrowerId} = req.body;
    // const bookowner =await Borrower.findOne({ 
    //     where: { id: borrowerId},attributes: ['name'],});
    //     const nameOfTheBorrower=bookowner.dataValues.name;

        try{
            const toReturn= await Book.update(
            { borrowerId: null},
            { where: { id: id } }, 
            { new: true });
          
            if (!toReturn) {
              return res.status(404).json({
                message: 'you are trying to return a book that is not in the database'
              });
            }
            return res.status(200).json({
              message: `Dear, Thank you for returning a book. Feel free to borrow another one!`,
            
            });
          } 
          catch (error) {
            console.error(error);
            return res.status(500).json({
              message: "Server error",
              error: error.message
            });
           
            }

                        
            }

        //get by genre
        static async getByGenre(req, res) {
            const { genre } = req.params;
            const books = await Book.findAll({ 
              where: { genre },
            });
          
            if (books.length === 0) {
              return res.status(404).json({
                message: `No books found with genre "${genre}"`,
              });
            }
          
            return res.status(200).json({
              data: books,
            });
          }
          

}
export default bookController;