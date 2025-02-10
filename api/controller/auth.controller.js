import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async(req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedpswd = bcryptjs.hashSync(password, 10);
    const newUser = new User({username,email,password: hashedpswd});
    
    try {
        await newUser.save();
        res.status(201).json('user created successfully');
        throw new Error("Testing sighn up error")
    } catch (error) {
        console.error("signup error", error);
        next(error);
    }
}
