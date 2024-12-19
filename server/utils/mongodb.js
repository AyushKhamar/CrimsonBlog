import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

export const mongoDbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch(() => {
      console.log("error in mongodb connection");
    });
};
