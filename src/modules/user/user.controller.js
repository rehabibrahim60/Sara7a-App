import { userModel } from "../../../database/models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendEmail } from "../../emails/sendEmail.js"

const signUp = async (req, res) => {
    await userModel.insertMany(req.body)
    sendEmail(req.body.email)
    res.json({ message: 'signed up successfully' })
}

const verifyemail=async(req,res)=>{
    jwt.verify(req.params.token,'rehab',async(err,decoded)=>{
        if(err) return res.json({err})
        await userModel.findOneAndUpdate({email:decoded.email},{verifyEmail:true})
        res.json({message:"your email verification ended"})
    })
    
}

const signin = async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email })
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign({ id: user._id, role: user.role },'rehab')
        return res.json({ message: "logged in successfully" ,token})
    }
    res.json({ message: 'incorrect email or password' })
}


export {
    signin,
    verifyemail,
    signUp
}