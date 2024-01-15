import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

// REGISTER USER
const register = asyncHandler(async (req, res) => {
  // take user information from frontend
  const { email, password } = req.body;

  // check for validation
  if (!email || !password) {
    throw new ApiError(400, 'All fields are required');
  }

  // check for duplicates : username, email
  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(409, 'Wrong credentials');
  }

  // create object and the save into the db
  const user = await User.create({
    email,
    password,
  });

  // send the res back
  res.status(200).json(res);
});

// Login USER
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'All fields are required');
  }

  const foundUser = await User.findOne({ email }).select(
    '-password -accessToken'
  );

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(401).json({ message: 'Unauthorized' });

  if (!foundUser) {
    throw new ApiError(403, 'User not found');
  }

  res.status(201).json(foundUser);
});

export { register, login };