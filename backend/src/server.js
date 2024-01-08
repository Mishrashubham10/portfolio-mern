import dotenv from 'dotenv';
import { connectDB } from './db/db';
dotenv.config();
const PORT = process.env.PORT || 5500;

// DB CONNECTION
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
  });
});