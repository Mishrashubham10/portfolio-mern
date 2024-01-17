import { Router } from 'express';
import {
  loginUser,
  logout,
  registerUser,
} from '../controllers/auth.controller.js';
import { verifyJWT } from '../middlewares/jwt.middleware.js';

const router = Router();

// REGISTER
router.route('/register').post(registerUser);
// LOGIN
router.route('/login').post(loginUser);
// LOGOUT
router.route('/logout').post(verifyJWT, logout);

export default router;