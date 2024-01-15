import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// router imports
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.routes.js";

const app = express();

// MIDDLEWARES
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// route declarations
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

export { app };