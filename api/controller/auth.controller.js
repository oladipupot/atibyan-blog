import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utilis/error.js";
import jwt from'jsonwebtoken'

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Validate inputs
  if (!username || !email || !password || username.trim() === '' || email.trim() === '' || password.trim() === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    // Hash the password
    const hashpassword = bcryptjs.hashSync(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashpassword,
    });

    // Save user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    // Handle errors
    next(error);
  }
};



// signin api
export const signin = async (req, res, next) => {
  const {email, password} = req.body;

  if(!email || !password || email === '' || password === ''){
    next(errorHandler(400, 'All Field are Required'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser){
      return next(errorHandler(404, 'invalid credentials'));
    }
  
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(404, 'invalid credentials'));
    }


  const token = jwt.sign (
      {id: validUser._id},
      process.env.JWT_ABUHAFS = "RANDOM123")
      const {password: pass, ...rest} = validUser._doc

      res.status(200).cookie('access_token', token, {
        httpOnly: true}).json(rest)
  } catch (error) {
    next(error)
  }

}