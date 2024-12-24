import express from "express";
import { clerkWebHook } from "../controllers/webhook.controller.js";
import bodyParser from "body-parser";

const router = new express.Router();

router.post(
  "/clerk",
  bodyParser.raw({ type: "application/json" }),
  clerkWebHook
);

export { router as webhookRouter };
