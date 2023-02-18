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
  verified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

const User = mongoose.model("User", schema);
export default User;
