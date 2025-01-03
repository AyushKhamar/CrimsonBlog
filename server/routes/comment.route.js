import express from "express";
import {
  addComment,
  getPostComments,
  deleteComment,
} from "../controllers/comment.controller.js";

const router = new express.Router();

router.get("/:postId", getPostComments);
router.post("/:postId", addComment);
router.delete("/:id", deleteComment);

export { router as commentRouter };
