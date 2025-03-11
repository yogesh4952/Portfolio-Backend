import express from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";
import blogRoute from "./routes/blog.route.js";
import githubRoute from "./routes/github.route.js";


config();
const app = express();
app.use(express.json());
app.use(cors(
  {
    origin: process.env.CLIENT_URL,
  }
));
app.use("/api/v1/blogs", blogRoute);

app.use("/api/v1/project",githubRoute);
connectDB()
const port = (process.env.PORT) || 8080;

app.get("/", (req, res) => {
  res.send("I am live");
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// DB_URL = mongodb+srv://admin:admin@cluster0.jthyc.mongodb.net/
// CLIENT_URL = http://localhost:5173
// PORT = 5000
// GITHUB_USERNAME = yogesh4952