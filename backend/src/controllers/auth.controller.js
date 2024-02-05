import User from '../models/User.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// REGISTER USER
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(404).json({ message: 'All fields must be filled' });

  // Hashing password
  const hashedPwd = await bcrypt.hash(password, 10);

  const userObj = {
    email,
    password: hashedPwd,
  };

  const user = await User.create(userObj);

  res.status(200).json(user, { message: 'User has been created' });
});

// LOGIN USER
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'All fields required');
  }

  // Find user with email address
  const user = await User.findOne({ email }).select('-password -refreshToken');
  console.log(user);

  if (!user) {
    throw new ApiError(404, 'User with the email not found');
  }

  // Compare the password of both user
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new ApiError(404, 'Unauthorized request!');
  }

  // TOKENS
  // ACCESS TOKEN
  const accessToken = jwt.sign(
    { userId: user._id, userEmail: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );

  // REFRESH TOKEN
  const refreshToken = jwt.sign(
    { userId: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.envREFRESH_TOKEN_EXPIRY }
  );

  // Setting Cookies
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 10 * 24 * 60 * 60 * 60,
  };

  res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options);
  json({
    message: `User with the email ${user.email} logged in successfully`,
  });
});

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;

  if (!cookie?.jwt) return res.status(204);

  //   Cookie options
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 10 * 24 * 60 * 60 * 1000,
  };

  res.clearCookie('jwt', options);

  res.status(200).json({ message: 'Clear Cookie' });
});

export { registerUser, loginUser, logout };