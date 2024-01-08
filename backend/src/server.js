import dotenv from 'dotenv';
import { connectDB } from './db/db.js';
dotenv.config();
const PORT = process.env.PORT || 5500;
import { app } from './app.js';

// DB CONNECTION
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is up runing at port ${PORT}`));
  })
  .catch((err) => {
    console.log('MONGO db connection failed! ', err);
  });