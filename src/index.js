import dotenv from "dotenv";
import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8989, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGO DB connection failed :( `, err);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR : ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR : ", error);
    throw error;
  }
})();
*/
