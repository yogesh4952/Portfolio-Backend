
import Blog from "../models/blog.model.js";

export const getAllBlogs = async (req, res) => {
  try {

   let Blogs = await Blog.find({})
   if(!Blogs){
     return res.status(404).json({message: "No Blogs found"})
   }

  res.json({ data: Blogs, message: "All Blogs fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const createBlog = async (req,res) => {
  const {title, content, author} = req.body;
  //check the input
  if(!title || !content || !author){
    return res.status(400).json({message: "All fields are required"});
  }

  try {
    let newBlog = new Blog({title, content, author});
    await newBlog.save();
    res.status(201).json({message: "Blog created successfully", data: newBlog});
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}

export const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    let blog = await Blog
    .findById(id);
    if(!blog){
      return res.status(404).json({message: "Blog not found"});
    }
    res.json({ data: blog, message: "Blog fetched successfully" });
  }
  catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}