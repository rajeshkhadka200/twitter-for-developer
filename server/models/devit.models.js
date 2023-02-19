import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userid: {
    type: String,
  },
  avatar: {
    type: String,
  },
  username: {
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
    default: "",
  },
  code: {
    type: String,
    default: "",
  },
  status: {
    type: String,
  },
  likes: [
    {
      userid: {
        type: String,
      },
    },
  ],
  redevits: [
    {
      userid: {
        type: String,
      },
      username: {
        type: String,
      },
    },
  ],
  comments: [
    {
      userid: {
        type: String,
      },
      username: {
        type: String,
      },
      name: {
        type: String,
      },
      content: {
        type: String,
      },
      timestamp: {
        type: String,
      },
      actual_date: {
        type: String,
      },
      avatar: {
        type: String,
        default: new Date().toISOString(),
      },
      verified: {
        type: Boolean,
        default: false,
      },
    },
  ],
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

const Devit = mongoose.model("Devit", schema);
export default Devit;
