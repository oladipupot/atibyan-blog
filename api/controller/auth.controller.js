import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utilis/error.js";

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