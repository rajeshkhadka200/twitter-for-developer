import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  date: {
    type: String,
  },
  read_time: {
    type: String,
  },
  source: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  user_name: {
    type: String,
  },
  user_image: {
    type: String,
  },
  url: {
    type: String,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Blog = mongoose.model("Blog", schema);
export default Blog;
