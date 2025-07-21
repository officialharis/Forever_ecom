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
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });

  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.log("Server will continue running without database connection");
    // Don't exit the process, let the server continue running
  }
};

export default connectDB;