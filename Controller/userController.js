import UserModel from "../Model/userModel";    
export const createUserController=async (req,res)=>{
    try{
        const {name, email, password } = req.body
        const response = await UserModel.createUserModel({ name, email, password });
        res.status(201).json({
            message: "user has been created",
            userId: response
        })
    }
    catch (err){
        res.status(500).json({ message: "Invalid Data"})
    }
}
//get all the users
export const getAllUserController = async (req, res) => {
    try {
        const data = await UserModel.getAllusersModel();
        res.json(data)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}