import mongoose from "mongoose";

export function connection(){
    mongoose.connect('mongodb://127.0.0.1:27017/saraha_project').then(()=>{
        console.log('database connected');
    }).catch((err)=>{
        console.log('connection fail',err);
    })
}