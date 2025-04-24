import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import { authenticateToken } from "./middleware/authenticationtoken.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

const posts = [
  { username: "John", title: "Post 1" },
  { username: "Jane", title: "Post 2" },
];
// get all posts
app.get("/posts", authenticateToken, (req, res) => {
  res.json(
    posts.filter(
      (post) => post.username === req.user.name,
      console.log(req.user)
    )
  );
});

// authenticate login user

app.post("/login", (req, res) => {
  const username = req.body.username;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }
  const user = { name: username };

  try {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: "Error generating token" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port  ${port}`);
});
