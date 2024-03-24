import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:{
        type:Number,
        min:[10,'age must be more than 10'],
        max:[70,'age must be less than 80']
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    verifyEmail:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

export const userModel= mongoose.model('user',userSchema);