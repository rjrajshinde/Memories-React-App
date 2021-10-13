import express from "express";
const router = express.Router();
import {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
  likePosts,
} from "../controllers/posts.js";

// localhost:5000/posts all the routes
router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);
router.delete("/:id", deletePosts);
router.patch("/:id/likePost", likePosts);

export default router;
