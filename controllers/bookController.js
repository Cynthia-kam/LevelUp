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
            const newBook= await Book.create({author,title,genre,OwnerId:owner,borrowerId:borrower,ISBN:isbn});
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
              
                    // return res.status(200).json({  
                    //     data:book        
                    // title:element.title,
                    // author:element.author,
                    // genre:element.genre,
                    // ISBN:book.ISBN,
                    // owner:bookowner.dataValues
                   
                    // });
                
            return res.status(200).json({     
            data:bookdata     
            // title:book.title,
            // author:book.author,
            // genre:book.genre,
            // ISBN:book.ISBN,
            // owner:bookowner.dataValues.name
           
            });
        }
    }

}
export default bookController;