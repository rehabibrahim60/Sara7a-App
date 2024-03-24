import {Router} from 'express'
import * as controller from './user.controller.js';
import { hashpass } from '../../middelware/hashpass.js';
import { checkEmail } from '../../middelware/checkEmailExictance.js';

const userRouter= Router();

userRouter.post('/signUp',checkEmail,hashpass,controller.signUp)
userRouter.post('/signin',controller.signin)
userRouter.get('/verifyemail/:token',controller.verifyemail)




export default userRouter