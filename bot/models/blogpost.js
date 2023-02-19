import mongoose from "mongoose";

const schema = new mongoose.Schema({
  profile_img: String,
  name: String,
  title: String,
  read_time: String,
  platform: String,
  created_on: String,
});

export default mongoose.models.devit || mongoose.model("blogpost", schema);
