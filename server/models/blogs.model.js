import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    // ongoing, finished, cancelled or upcoming
    type: String,
    required: true,
  },
  createdAt: {
    required: true,
    type: String,
  },
});

const Blog = mongoose.model("Blog", schema);
export default Blog;
