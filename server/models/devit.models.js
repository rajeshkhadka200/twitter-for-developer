import mongoose from "mongoose";

const schema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  code: {
    type: String,
    required: false,
  },
  status: {
    // to identify if it is a original post or a re-devit
    type: String,
    required: true,
  },
  createdAt: {
    required: true,
    type: String,
  },
});

export default mongoose.models.devit || mongoose.model("devit", schema);
