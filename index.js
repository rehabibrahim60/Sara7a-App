import express from 'express';
import { connection } from './database/dbconnection.js';
import userRouter from './src/modules/user/user.router.js';
import messageRouter from './src/modules/message/message.router.js';
const app = express()
const port = 3000
connection();
app.use(express.json())
app.use('/user',userRouter)
app.use('/note',messageRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))