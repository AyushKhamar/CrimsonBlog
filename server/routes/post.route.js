import express from "express";
import Post from "../models/post.model.js";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
} from "../controllers/post.controller.js";
const router = new express.Router();

router.get("/", getPosts);
router.get("/:slug", getPostById);
router.post("/", createPost);
router.delete("/:id", deletePost);

export { router as postRouter };
