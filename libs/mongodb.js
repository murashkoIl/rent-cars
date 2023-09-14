import mongoose from 'mongoose';

let isConnected = false;
export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('DB connected successfully');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};

