import mongoose from "mongoose";

const schema = new mongoose.Schema({
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
      createdAt: {
        type: String,
      },
      verified: {
        type: Boolean,
      },
    },
  ],
  createdAt: {
    type: String,
  },
});

const Devit = mongoose.model("Devit", schema);
export default Devit;
