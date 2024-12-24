import dotenv from "dotenv";
import userModel from "../models/user.model.js";
import postModel from "../models/post.model.js";
import { Webhook } from "svix";
import commentModel from "../models/comment.model.js";
dotenv.config();
export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed!");
  }
  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({
      message: "Webhook verification failed!",
    });
  }
  if (evt.type === "user.created") {
    console.log(evt.data);
    const newUser = new userModel({
      clerkUserId: evt.data.id,
      username: evt.data.username || evt.data.email_addresses[0].email_address,
      email: evt.data.email_addresses[0].email_address,
      img: evt.data.profile_img_url,
    });

    await newUser.save();
  }

  if (evt.type === "user.deleted") {
    console.log(evt.data);

    const deletedUser = await userModel.findOneAndDelete({
      clerkUserId: evt.data.id,
    });
    console.log(deletedUser);

    await postModel.deleteMany({ user: deletedUser._id });
    await commentModel.deleteMany({ user: deletedUser._id });
  }

  return res.status(200).json({
    message: "Webhook received",
  });
};
