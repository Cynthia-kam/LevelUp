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
}
export default ownerController;