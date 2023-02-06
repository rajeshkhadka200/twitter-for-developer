import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  createdAt: {
    required: true,
    type: String,
  },
});

export default mongoose.models.user || mongoose.model("user", schema);
