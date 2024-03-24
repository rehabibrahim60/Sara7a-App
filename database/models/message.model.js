import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    text: String,
    receivedId: mongoose.Types.ObjectId,


}, { timestamps: true })

export const messageModel = mongoose.model('message', messageSchema)
