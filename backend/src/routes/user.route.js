import { Router } from "express";
import { register, login } from "../controllers/user.controller.js";

const router = Router();

// REGISTER ROUTE
router.route("/register").post(register);
// LOGIN ROUTE
router.route("/login").post(login);

export default router