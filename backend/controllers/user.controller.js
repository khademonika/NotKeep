import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const signupController = async (req, res ) => {
   try {
     const {username, email, password} = req.body;
    if(!username || !email || !password) {
        return res.status(400).json({message: 'Please provide all required fields'});
    }
    if(password.length < 6) {
        return res.status(400).json({message: 'Password must be at least 6 characters long'});
    }
    const existingUser = await User.findOne({email});
    if(existingUser) {
        return res.status(400).json({message: 'User with this email already exists'});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    await newUser.save();
    res.status(201).json({message: 'User registered successfully'});
   } catch (error) {
     console.error('Error during signup:', error);
     res.status(500).json({message: 'Internal server error'});
   }
}

export const loginController = async ( req, res ) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({message: 'Please provide all required fields'});
    }
    const user = await User.findOne({email});
    if(!user) {
        return res.status(400).json({message: 'Invalid email or password'});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        return res.status(400).json({message: 'Invalid email or password'});
    }
    res.status(200).json({message: 'Login successful'});
}

export const logoutController = async (req, res) => {
    
    res.status(200).json({message: 'Logout successful'});
}