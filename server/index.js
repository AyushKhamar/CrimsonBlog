import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.route.js";
import { postRouter } from "./routes/post.route.js";
import { commentRouter } from "./routes/comment.route.js";
import { mongoDbConnection } from "./utils/mongodb.js";
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//user
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(process.env.PORT, async () => {
  console.log("Server is running at ", process.env.PORT);
  await mongoDbConnection();
});
