//TCQ9DIY23RiaxXGH
//mongodb+srv://chanchalu21cn361:TCQ9DIY23RiaxXGH @cluster0.8qi1xjg.mongodb.net/?

// const mongoose = require("mongoose");
 import mongoose from "mongoose";

 export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://chanchalu21cn361:TCQ9DIY23RiaxXGH@cluster0.8qi1xjg.mongodb.net/FoodDel"
    )
    .then(() => {
      console.log("MongoDB Connected...");
    })
    .catch((err) =>
      console.log(err + "error occure while connecting to MongoDB")
    );
};

// module.exports= connectDB;