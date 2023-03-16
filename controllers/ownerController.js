import Owner from "../models/Owner.js";

class  ownerController{
    // functions to get all books from database
    static async getOwners(req, res){
        
        try {
            const owners= await Owner.findAll()
            res.status(200).json({
                data:owners
            })
        } catch (error) {
            
            res.status(500).json({
                message:"server error"
            })
            
        }
    }
    //create an owner
    static async createOwner(req, res){

        try {
            const {name}= req.body;
            const newOwner= await Owner.create({name});
            res.status(201).json({
                message:"New Book Owner created",
                data:newOwner
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
export default ownerController;