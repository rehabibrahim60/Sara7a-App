import { messageModel } from "../../../database/models/message.model.js"


const allMessages = async (req, res) => {
        let messages = await messageModel.find().populate('receivedId', 'name -_id')
        res.json({ messages: messages })

}

const addMessage = async (req, res) => {
    await messageModel.insertMany(req.body)
    res.json({ message: "added successfully" })

}

const updateMessage = async (req, res) => {
    let message = await messageModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    res.json({ success: "updated successfully", message })

}

const deleteMessage = async (req, res) => {
    let message = await messageModel.findByIdAndDelete({ _id: req.params.id })
    if (!message) return res.json({ message: "message not found" })
    res.json({ success: "deleted successfully", message })

}

export {
    addMessage,
    updateMessage,
    deleteMessage,
    allMessages
}