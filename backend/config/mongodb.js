import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log("MongoDB connected");
    });

    mongoose.connection.on('error', (err) => {
      console.log("MongoDB connection error:", err.message);
    });

    mongoose.connection.on('disconnected', () => {
      console.log("MongoDB disconnected");
    });

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, 
      socketTimeoutMS: 45000, 
    });

  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.log("Server will continue running without database connection");
  }
};

export default connectDB;