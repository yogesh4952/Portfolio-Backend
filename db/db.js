import mongoose from "mongoose";
import { config } from "dotenv";
config();
const connectDB = async () => {
  try {
    const connectionURI = process.env.DB_URL;
    await mongoose.connect(connectionURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
