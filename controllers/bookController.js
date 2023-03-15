import Book from "../models/Book.js";
import Owner from "../models/Owner.js";
import { Sequelize } from "sequelize";
class  bookController{
    // functions to get all books
    static async getBooks(req, res){
        
        try {
            const books= await Book.findAll()
            res.status(200).json({
                data:books
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
            where: { id: id },  
            include: [{
            model: Owner,
        //    where: { id: Sequelize.col('Book.ownerId') }, 
            attributes: ['name'],
            where: Sequelize.literal('`Owner`.`id` = `Book`.`ownerId`')
          }] });
         
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
}
export default bookController;