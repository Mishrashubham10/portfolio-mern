import mongoose from 'mongoose';
import { DB_NAME } from '../constant';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected !! DB HOST : ${conn.connection.host}`);
  } catch (err) {
    throw new Error('DB connection failed ', err);
    process.exit(1);
  }
};

export {connectDB};