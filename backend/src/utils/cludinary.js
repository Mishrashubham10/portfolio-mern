import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloud_key: process.env.CLOUDINARY_API_KEY,
  cloud_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const res = cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });

    console.log('File uploaded on cloudinary ', res);
    return res;
  } catch (err) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };