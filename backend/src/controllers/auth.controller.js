import cookieParser from 'cookie-parser';
import User from '../models/User';
import { ApiError } from '../utils/ApiError';
import { asyncHandler } from '../utils/asyncHandler';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// REGISTER USER
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'All fields are required');
  }

  const duplicate = await User.findOne({
    email,
  });

  if (duplicate) {
    throw new ApiError(400, 'User with the email address already exists');
  }

  const user = await User.create({
    email,
    password,
  }).select('-password -accessToken');

  res.status(200).json(user);
});

// LOGIN USER
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'All fields are required');
  }

  // Check for email
  const user = await User.findOne({ email }).select('-password');

  if (!user) {
    throw new ApiError(400, 'User not found');
  }

  //   Checking users password
  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(401).json({ message: 'Unauthorized' });

  // GENERATING ACCESS AND REFRESH TOKENS
  const accessToken = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: ACCESS_TOKEN_EXPIRY,
    }
  );

  const refreshToken = jwt.sign(
    { email: user.email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  //   Cookie options
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 10 * 24 * 60 * 60 * 1000,
  };

  // Create secure cookie with refresh token
  res.cookie('jwt', refreshToken, options);

  // Send accessToken containing username and roles
  res.status(200).json({ accessToken });
});

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = asyncHandler( async(req, res) => {
    const cookie = req.cookies;

    if (!cookie?.jwt) return res.status(204)

    //   Cookie options
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 10 * 24 * 60 * 60 * 1000,
  };

  res.clearCookie('jwt', options);

  res.status(200).json({message: "Clear Cookie"})

})

export { registerUser, loginUser };