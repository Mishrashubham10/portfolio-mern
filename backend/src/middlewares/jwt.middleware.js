import jwt from 'jwt';
import { ApiError } from '../utils/ApiError';
import User from '../models/User';

export const verifyJWT = async (req, _, next) => {
  try {
    const token = req.cookies?.accessToken || req.header('Authorization');

    if (!token) {
      throw new ApiError(401, 'Unauthorized request');
    }

    const decodedToken = jwt.sign(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      '-password -refreshToken'
    );

    if (!user) {
      throw new ApiError(401, 'Invalid Access Token');
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || 'Invalid access token');
  }
};