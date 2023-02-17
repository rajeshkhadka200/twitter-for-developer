import mongoose from "mongoose";

const schema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  user_name: {
    type: String,
  },
  name: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  code: {
    type: String,
  },
  status: {
    // to identify if it is a original post or a re-devit
    type: String,
  },
  likes: [
    {
      user_id: {
        type: String,
      },
    },
  ],
  redevits: [
    {
      user_id: {
        type: String,
      },
      user_name: {
        type: String,
      },
    },
  ],
  comments: [
    {
      user_id: {
        type: String,
      },
      user_name: {
        type: String,
      },
      name: {
        type: String,
      },
      content: {
        type: String,
      },
      createdAt: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: String,
  },
});

export default mongoose.models.devit || mongoose.model("Devit", schema);
