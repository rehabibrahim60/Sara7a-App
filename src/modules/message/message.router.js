import { Router } from "express";
import * as controller from './message.controller.js'
import { auth } from "../../middelware/auth.js";
const messageRouter = Router()


messageRouter.get('/',auth,controller.allMessages)
messageRouter.post('/',auth,controller.addMessage)
messageRouter.put('/:id',auth,controller.updateMessage)
messageRouter.delete('/:id',auth,controller.deleteMessage)


export default messageRouter