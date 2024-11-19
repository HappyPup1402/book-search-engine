import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Use either the environment variable or fallback to the local database
    const connectionUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks';

    // Connect to MongoDB
    await mongoose.connect(connectionUri);

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit the process with an error code
  }
};

connectDB();

export default mongoose.connection;
