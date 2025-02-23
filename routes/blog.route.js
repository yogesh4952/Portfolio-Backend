import { createBlog, getAllBlogs, getBlogById } from "../controllers/blog.controller.js";
import express from "express";

const route = express.Router();

// Define GET and POST routes for "/"
route.route("/").get(getAllBlogs).post(createBlog);
route.route("/:id").get(getBlogById);

export default route;
