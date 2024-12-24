import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.route.js";
import { postRouter } from "./routes/post.route.js";
import { commentRouter } from "./routes/comment.route.js";
import { mongoDbConnection } from "./utils/mongodb.js";
import { webhookRouter } from "./routes/webhook.route.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import ImageKit from "imagekit";
dotenv.config();
const app = express();

app.use(cors());
app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//user
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(process.env.PORT, async () => {
  console.log("Server is running at ", process.env.PORT);
  await mongoDbConnection();
});
