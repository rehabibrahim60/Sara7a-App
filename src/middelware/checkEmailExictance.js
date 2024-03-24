import { userModel } from "../../database/models/user.model.js";



export const checkEmail=async(req,res,next)=>{
    let user = await userModel.findOne({email:req.body.email})
    if(user) return res.json({message:'user already exists'})
    next();
}