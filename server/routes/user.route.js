import express from "express";
import userModel from "../models/user.model.js";

const router = new express.Router();

router.get("/", async (req, res) => {
  const users = await userModel.find({});
  return res.status(200).json({ users });
});

export { router as userRouter };
