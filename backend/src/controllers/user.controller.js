import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import User from '../models/User.js';

// @desc Get all users
// @route GET /users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean();

  if (!users.length) {
    throw new ApiError(400, 'No users found');
  }

  res.status(200).json(users);
});

// @desc Get user
// @route GET /users/:id
// @access Private
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(401, 'Id required');
  }

  const user = await User.findById({ id }).select('-password -refreshToken');

  if (!user) {
    throw new ApiError(400, 'User not found');
  }

  res.status(201).json(user);
});

// @desc Update user
// @route PUT /users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, 'Id required');
  }

  const user = await User.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
  ).exec();

  if (!user) {
    throw new ApiError(404, 'Something wrong with updating user');
  }

  res
    .status(201)
    .json({ message: `User with ${user.username} updated successfully` });
});

// @desc Delete user
// @route DELETE /users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, 'Id required');
  }

  const user = await User.findByIdAndDelete(id, { new: true });

  if (!user) {
    throw new ApiError(404, 'Someting wrong with deleting user');
  }

  res
    .status(200)
    .json({ message: `User with ${user.username} deleted successfully` });
});

export { getUsers, getUser, updateUser, deleteUser };