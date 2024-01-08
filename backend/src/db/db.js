import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected !! DB HOST : ${conn.connection.host}`);
  } catch (err) {
    console.log("MONGODB connection error ", err);
    process.exit(1);
  }
};

export {connectDB};