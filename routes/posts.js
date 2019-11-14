const express = require("express");
const router = express.Router();

const PostModel = require("../models/postModel");

router.get("/", (req, res, next) => {
  res.send("Posts API").status(200);
});

// Get all posts
router.get("/all", async (req, res, next) => {
  const allPosts = await PostModel.getAll();
  res.json(allPosts).status(200);
});

// Get one post
router.get("/:post_id", async (req, res, next) => {
  const { post_id } = req.params;
  const thePost = await PostModel.getById(post_id);
  res.json(thePost).status(200);
});

// Create post
router.post("/posts/add", async (req, res) => {
  const { author_id, title, content } = req.body;
  const response = await PostModel.addPost(author_id, title, content);
  if (response.command === "INSERT" && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send(`Could not add new post ${title}`).status(409);
  }
});

module.exports = router;
