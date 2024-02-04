import { Router } from 'express';
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';

const router = Router();

// GET USERS
router.route('/').get(getUsers);
// GET USER
router.route('/:id').get(getUser);
// UPDATE USER
router.route('/:id').put(updateUser);
// DELETE USER
router.route('/:id').delete(deleteUser);

export default router;