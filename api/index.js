import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();

let connection =  mongoose.connect(process.env.MONGODB)
if(connection){
    console.log("connection successful")
}else{
    console.log("connection with db failed. try ");
}


const app = express();
app.use(express.json())

app.listen(3000, ()=>{
    console.log('server is running on PORT 3000 hello');
})

app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);

//middle ware

app.use((err, req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error'; 

    console.error("API Error response:" , JSON.stringify({
        success: false,
        statusCode,
        message,
    }, null,2));

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})


