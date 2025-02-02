import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let connection =  mongoose.connect(process.env.MONGODB)
if(connection){
    console.log("connection successful")
}else{
    console.log("connection with db failed. try ");
}


const app = express();

app.listen(3000, ()=>{
    console.log('server is running on PORT 3000 hello');
})