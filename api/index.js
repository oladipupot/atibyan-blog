
import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes";

dotenv.config()
mongoose.connect(process.env.MONGO).then(
() => {
    console.log("mongodb is connected")
}
)
.catch((err) => {
    console.log(err)
})
const app = express();
app.listen(3000, () => {
    console.log('server is running on port 3000')
    
})

app.use ('/ap1/user', userRouter)
