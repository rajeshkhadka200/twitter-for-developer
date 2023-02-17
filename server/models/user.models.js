import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  username: {
    type: String,
  },
  bio: {
    type: String,
    default: "I am a developer",
  },
  avatar: {
    type: String,
  },
  apiKey: {
    type: String,
  },
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

export default mongoose.models.user || mongoose.model("user", schema);
