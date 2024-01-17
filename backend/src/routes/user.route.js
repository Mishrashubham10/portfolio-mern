import { Router } from 'express';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';

const router = Router();

// GET USERS
router.route('/').get(getUsers);
// CREATE USER
router.route('/').post(createUser);
// GET USER
router.route('/:id').get(getUser);
// UPDATE USER
router.route('/:id').put(updateUser);
// DELETE USER
router.route('/:id').delete(deleteUser);

export default router;