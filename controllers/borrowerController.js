import Borrower from "../models/Borrower.js";

class  borrowerController{
    // functions to get all books
    static async getBorrowers(req, res){
        
        try {
            const borrowers= await Borrower.findAll()
            res.status(200).json({
                data:borrowers
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message:"server error"
            })
            
        }
    }
}
export default borrowerController;