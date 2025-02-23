import mongoose from "mongoose";
import { config } from "dotenv";
config();
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  author:{
    type: String,
    required: true,
  }

},{timestamps: true});
const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;

