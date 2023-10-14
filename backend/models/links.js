import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const linkSchema = mongoose.Schema({
  // schema of content model
  url: {
    // url of website from which content is scraped
    type: String,
    required: true,
  },
  maxRequests:{
    type: Number,
    required: true,
  }
});

export const link = mongoose.model("link", linkSchema);
